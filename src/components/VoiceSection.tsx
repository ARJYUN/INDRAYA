import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Info, CheckCircle, Upload } from 'lucide-react';
import { COLLEGE_INFO } from '../data/unionData';

export const VoiceSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    registerNumber: '',
    department: '',
    description: '',
    file: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const assuranceItems = [
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      desc: 'Your concerns are shared only with the relevant Union members.',
    },
    {
      icon: Info,
      title: 'Supportive Resolution',
      desc: 'We aim to respond with a plan of action within 48 hours.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const subject = `Student Complaint from ${formData.name || 'Anonymous'}`;
      let body = `Register Number: ${formData.registerNumber}\n\nDepartment: ${formData.department}\n\nGrievance:\n${formData.description}`;
      if (formData.file) {
        body += `\n\nSupporting file: ${formData.file.name} (please attach manually)`;
      }
      const mailtoUrl = `mailto:${COLLEGE_INFO.grievanceEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="complaints" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32">
            <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-sm">
              Voice of Student
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-8 leading-tight">
              Something on your{' '}
              <span className="italic font-serif underline decoration-rose-500/50">mind?</span>
            </h2>
            <div className="space-y-6">
              {assuranceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <item.icon className="text-rose-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side / Form */}
          <motion.div
            layout
            className="bg-zinc-900/50 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-emerald-500 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Logged</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    We've received your voice. We'll be in touch through your registered college
                    email.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        registerNumber: '',
                        department: '',
                        description: '',
                        file: null,
                      });
                    }}
                    className="mt-8 text-rose-500 font-bold hover:underline cursor-pointer"
                  >
                    Submit another one
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                        placeholder="Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                        Register Number
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.registerNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, registerNumber: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                        placeholder="Register Number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                      Department
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors"
                      placeholder="Department"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                      Grievance Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-rose-500 transition-colors resize-none"
                      placeholder="Describe your issue or feedback in detail..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                      Supporting Document (Optional)
                    </label>
                    <label className="flex items-center gap-3 w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-gray-400 cursor-pointer hover:border-white/20 transition-colors">
                      <Upload size={18} />
                      <span className="text-sm truncate">
                        {formData.file ? formData.file.name : 'Choose file to attach'}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            file: e.target.files ? e.target.files[0] : null,
                          })
                        }
                      />
                    </label>
                  </div>

                  {errorMsg && <p className="text-rose-400 text-sm">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 font-bold text-white tracking-wide transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Grievance'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

