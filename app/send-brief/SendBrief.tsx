"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import { Upload, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const SERVICES = [
  "Digital Marketing & Campaigns",
  "Content & Brand Development",
  "Experience & Design",
  "Traditional & Experiential Marketing",
];

const BUDGET_RANGES = [
  "#10,000 - #25,000",
  "#25,000 - #50,000",
  "#50,000 - #100,000",
  "#100,000+",
];

export function BriefPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    services: [] as string[],
    projectGoals: "",
    budgetRange: "",
    consent: false,
  });

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/zip",
      ];

      if (!validTypes.includes(file.type)) {
        setError("Please upload a PDF, DOCX, or ZIP file");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }

      setFileName(file.name);
      setFile(file);
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.consent) {
      setError("Please consent to our privacy policy");
      return;
    }

    if (formData.services.length === 0) {
      setError("Please select at least one service");
      return;
    }

    setLoading(true);

    try {
      let fileUrl = null;

      // ✅ Upload file if it exists
      if (fileName && file) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("Awani Digitals docs") // your bucket name
          .upload(`uploads/${Date.now()}_${file.name}`, file);

        if (uploadError) throw uploadError;

        // Get the public URL of the uploaded file
        const { data: publicUrlData } = supabase.storage
          .from("Awani Digitals docs")
          .getPublicUrl(uploadData.path);

        fileUrl = publicUrlData.publicUrl;
      }
      const { error: insertError } = await supabase.from("briefs").insert({
        full_name: formData.fullName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        services: formData.services,
        project_goals: formData.projectGoals,
        budget_range: formData.budgetRange || null,
        file_url: fileUrl || null,
        consent_given: formData.consent,
      });

      const formattedBriefs = {
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        services: formData.services.join(", "),
        projectGoals: formData.projectGoals,
        fileUrl: fileUrl || "No file uploaded",
        budgetRange: formData.budgetRange || null,
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS environment variables (NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) must be set."
        );
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        formattedBriefs,
        publicKey
      );

      console.log(response);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        services: [],
        projectGoals: "",
        budgetRange: "",
        consent: false,
      });
      setFileName("");

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit brief. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#20201e]  pt-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#2b2a26] rounded-lg p-12 text-center border border-gray-800">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-[#f73444]" />
            </div>
            <h2 className="text-3xl font-bold text-[#faf5ff] mb-4">
              Brief Received!
            </h2>
            <p className="text-gray-400 mb-6">
              Thank you for sharing your goals with us. We've received your
              brief and our team will review it shortly. We'll be in touch
              within 24 hours to discuss your project.
            </p>
            <p className="text-gray-500 text-sm">
              Check your email for a confirmation message.
            </p>

            <Link href="/" className="text-[#f73444] underline mt-6 ">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#20201e] rounded-2xl pt-10 pb-20 px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Send Us Your Brief
          </h1>
          <p className="text-white text-lg">
            Share your goals with us, and we'll transform them into a powerful
            marketing plan that works. Whether you have a detailed brief or just
            an idea, we're ready to help you make it happen.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" rounded-lg p-8 md:px-8 px-0  "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#faf5ff] font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] placeholder-gray-600 focus:outline-none focus:border-[#f73444] transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-[#faf5ff] font-medium mb-2">
                Company / Brand Name *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] placeholder-gray-600 focus:outline-none focus:border-[#f73444] transition"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-[#faf5ff] font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] placeholder-gray-600 focus:outline-none focus:border-[#f73444] transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[#faf5ff] font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] placeholder-gray-600 focus:outline-none focus:border-[#f73444] transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#faf5ff] font-medium mb-3">
              What services are you interested in? *
            </label>
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 rounded border-gray-600 bg-[#1a1a17] cursor-pointer accent-[#f73444]"
                  />
                  <span className="ml-3 text-gray-300 group-hover:text-[#faf5ff] transition">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#faf5ff] font-medium mb-2">
              Tell us about your project or goals *
            </label>
            <textarea
              required
              value={formData.projectGoals}
              onChange={(e) =>
                setFormData({ ...formData, projectGoals: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] placeholder-gray-600 focus:outline-none focus:border-[#f73444] transition resize-none"
              placeholder="Describe your project, goals, vision, and any specific requirements..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#faf5ff] font-medium mb-2">
              Budget range (optional)
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) =>
                setFormData({ ...formData, budgetRange: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#1a1a17] border border-gray-700 rounded-lg text-[#faf5ff] focus:outline-none focus:border-[#f73444] transition"
            >
              <option value="">Select a budget range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[#faf5ff] font-medium mb-3">
              Upload your brief or reference document (optional)
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.docx,.zip"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-[#f73444] hover:bg-[#1a1a17]/50 transition"
              >
                <div className="flex flex-col items-center">
                  <Upload size={32} className="text-gray-500 mb-2" />
                  <p className="text-gray-300 font-medium">
                    {fileName ? fileName : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    PDF, DOCX, or ZIP (max 10MB)
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="mb-8">
            <label className="flex items-start cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
                className="w-5 h-5 rounded border-gray-600 bg-[#1a1a17] cursor-pointer accent-[#f73444] mt-1"
              />
              <span className="ml-3 text-gray-400 group-hover:text-gray-300 transition">
                I consent to Awani Digitals using my details to respond to this
                inquiry.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-[#d41234] disabled:opacity-50 disabled:cursor-not-allowed text-[#faf5ff] font-bold py-4 rounded-lg transition duration-300 text-lg"
          >
            {loading ? "Sending Your Brief..." : "Send My Brief"}
          </button>

          {error && <div className="mt-2 p-4 text-red-400 ">{error} !</div>}
        </form>
      </div>
    </div>
  );
}
