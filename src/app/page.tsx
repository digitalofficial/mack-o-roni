"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
  Truck,
  Calendar,
  Users,
  Star,
  Sparkles,
  Menu,
  X,
  CircleDollarSign,
} from "lucide-react";

/* ───── animation helpers ───── */
function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───── data ───── */
const menuItems = [
  {
    name: "The OG Classic",
    price: "$8",
    desc: "Our signature three-cheese blend on perfectly cooked elbow macaroni. Simple. Perfect. Legendary.",
    tag: "Fan Favorite",
    emoji: "🧀",
  },
  {
    name: "Truffle Shuffle",
    price: "$12",
    desc: "White cheddar mac with truffle oil, parmesan crisps, and fresh chives. Fancy pants mac.",
    tag: "Premium",
    emoji: "🍄",
  },
  {
    name: "BBQ Brisket Mac",
    price: "$13",
    desc: "Smoked brisket, tangy BBQ drizzle, pickled onions, and cheddar on our classic mac base.",
    tag: "Hearty",
    emoji: "🥩",
  },
  {
    name: "Buffalo Chicken Mac",
    price: "$12",
    desc: "Crispy buffalo chicken, blue cheese crumbles, ranch drizzle, and celery on spicy mac.",
    tag: "Spicy",
    emoji: "🔥",
  },
  {
    name: "Jalapeno Popper Mac",
    price: "$11",
    desc: "Cream cheese, crispy jalapenos, bacon bits, and pepper jack on our classic base.",
    tag: "Spicy",
    emoji: "🌶️",
  },
  {
    name: "Vegan Cashew Mac",
    price: "$10",
    desc: "Creamy cashew-based cheese sauce with nutritional yeast, roasted garlic, and herbs.",
    tag: "Plant Based",
    emoji: "🌱",
  },
  {
    name: "Mac Bites",
    price: "$6",
    desc: "Crispy fried mac and cheese balls served with our house dipping sauce. The perfect appetizer.",
    tag: "Appetizer",
    emoji: "🟡",
  },
];

const toppings = [
  { name: "Bacon", price: "+$2" },
  { name: "Jalapenos", price: "+$1" },
  { name: "Hot Honey", price: "+$1.50" },
  { name: "Breadcrumbs", price: "+$1" },
  { name: "Truffle Oil", price: "+$2.50" },
  { name: "Green Onion", price: "+$0.50" },
];

const weeklySchedule = [
  { day: "Monday", location: "UA Campus - Main Gate", time: "11am - 2pm" },
  { day: "Tuesday", location: "Armory Park", time: "11am - 3pm" },
  { day: "Wednesday", location: "Catalina Foothills", time: "4pm - 8pm" },
  { day: "Thursday", location: "Congress St Downtown", time: "11am - 2pm, 5pm - 9pm" },
  { day: "Friday", location: "MSA Annex", time: "5pm - 10pm" },
  { day: "Saturday", location: "Rillito Park Farmers Market", time: "8am - 1pm" },
  { day: "Sunday", location: "Catering & Private Events Only", time: "By reservation" },
];

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Toppings", href: "#toppings" },
  { label: "Schedule", href: "#schedule" },
  { label: "Catering", href: "#catering" },
];

/* ───── page ───── */
export default function MacORoni() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFBEB]">
      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBEB]/90 backdrop-blur-md border-b border-[#FCD34D]/30"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="font-[family-name:var(--font-fredoka)] font-bold text-2xl">
            <span className="text-[#F97316]">Mac</span>
            <span className="text-[#1C1917]">-O-</span>
            <span className="text-[#FCD34D]">Roni</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-[#1C1917]/70 hover:text-[#F97316] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#catering"
              className="bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Order Catering
            </a>
          </div>
          <button
            className="md:hidden text-[#1C1917]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FFFBEB] border-t border-[#FCD34D]/30 px-6 py-4 space-y-3"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold text-[#1C1917]/70 hover:text-[#F97316]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#catering"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#F97316] text-white text-sm font-bold px-5 py-2.5 rounded-full text-center"
            >
              Order Catering
            </a>
          </motion.div>
        )}
      </motion.nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1920&q=80"
          alt="Mac and cheese close-up"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1C1917]/40" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 max-w-6xl mx-auto">
          {/* Text */}
          <div className="text-center lg:text-left lg:flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-[#FCD34D]/30 backdrop-blur-sm border border-[#FCD34D]/40 rounded-full px-5 py-2 mb-6"
            >
              <Truck className="w-4 h-4 text-[#FCD34D]" />
              <span className="text-white text-sm font-bold">Tucson&apos;s Cheesiest Food Truck</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-fredoka)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
              style={{ textShadow: "3px 5px 15px rgba(0,0,0,0.5)" }}
            >
              Cheesy. Loaded.{" "}
              <span className="text-[#FCD34D]">Legendary.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
              style={{ textShadow: "1px 2px 8px rgba(0,0,0,0.4)" }}
            >
              Gourmet mac &amp; cheese loaded with outrageous toppings, rolling
              through the streets of Tucson. Life&apos;s too short for boring mac.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
              >
                See the Menu
              </a>
              <a
                href="#schedule"
                className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 transition-colors"
              >
                Find the Truck
              </a>
            </motion.div>
          </div>
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="lg:flex-shrink-0"
          >
            <motion.img
              src="/mascot.png"
              alt="Mack o' Roni mascot — leprechaun noodle character with piles of mac and cheese"
              className="w-[280px] md:w-[340px] lg:w-[400px] drop-shadow-[0_10px_40px_rgba(252,211,77,0.4)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* ── FUN STATS ── */}
      <section className="bg-[#F97316] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "10K+", label: "Bowls Served" },
            { num: "7", label: "Loaded Flavors" },
            { num: "6", label: "Premium Toppings" },
            { num: "4.9", label: "Star Rating" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-3xl md:text-4xl font-[family-name:var(--font-fredoka)] font-bold text-white">
                {s.num}
              </div>
              <div className="text-sm text-white/70 mt-1 font-semibold">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 px-6 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">
                The Menu
              </span>
              <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl font-bold mt-3 text-[#1C1917]">
                Pick Your Mac
              </h2>
              <p className="text-[#1C1917]/50 mt-4 max-w-xl mx-auto">
                Every bowl starts with our perfectly cooked elbow macaroni and
                house-made cheese sauce. Then we load it up.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[#FCD34D]/30 hover:border-[#F97316]/50 transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{item.emoji}</span>
                    <span className="bg-[#FCD34D]/30 text-[#1C1917] text-xs font-bold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-[#1C1917]">
                    {item.name}
                  </h3>
                  <p className="text-[#1C1917]/50 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#FCD34D]/20 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-[#F97316]">
                      {item.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#F97316] text-white text-sm font-bold px-4 py-2 rounded-full"
                    >
                      I Want This
                    </motion.button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPPINGS BAR ── */}
      <section id="toppings" className="py-24 px-6 bg-[#FCD34D]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1C1917]/60 font-bold text-sm uppercase tracking-widest">
                Customize It
              </span>
              <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl font-bold mt-3 text-[#1C1917]">
                The Toppings Bar
              </h2>
              <p className="text-[#1C1917]/60 mt-4 max-w-lg mx-auto">
                Make it yours. Add any of these premium toppings to any bowl.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {toppings.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white rounded-2xl p-5 text-center shadow-md"
                >
                  <h4 className="font-[family-name:var(--font-fredoka)] font-bold text-lg text-[#1C1917]">
                    {t.name}
                  </h4>
                  <p className="text-[#F97316] font-bold mt-1">{t.price}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEEKLY SCHEDULE ── */}
      <section id="schedule" className="py-24 px-6 bg-[#FFFBEB]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">
                Find Us
              </span>
              <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl font-bold mt-3 text-[#1C1917]">
                Weekly Schedule
              </h2>
              <p className="text-[#1C1917]/50 mt-4 max-w-xl mx-auto">
                We park at a different spot each day. Follow us on Instagram for
                real-time updates and surprise pop-ups!
              </p>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {weeklySchedule.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-white rounded-2xl p-5 shadow-sm border-2 border-[#FCD34D]/20"
                >
                  <div className="w-28 flex-shrink-0">
                    <span className="font-[family-name:var(--font-fredoka)] font-bold text-[#F97316] text-lg">
                      {s.day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[#1C1917]">
                      <MapPin className="w-4 h-4 text-[#F97316]" />
                      <span className="font-semibold">{s.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#1C1917]/50 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {s.time}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-10 text-center">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#FCD34D] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                Follow for Daily Location
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CATERING ── */}
      <section id="catering" className="py-24 px-6 bg-[#1C1917]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <span className="text-[#FCD34D] font-bold text-sm uppercase tracking-widest">
                Catering
              </span>
              <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl font-bold mt-3 text-white">
                Mac for Your Whole Crew
              </h2>
              <p className="text-white/50 mt-4 mb-6">
                Weddings, office parties, birthdays, game days &mdash; we bring
                the truck and the cheesy goodness. Custom menus, toppings bars,
                and mac for up to 500 guests.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />, text: "20-500 Guests" },
                  { icon: <Truck className="w-5 h-5" />, text: "Truck On-Site" },
                  { icon: <Sparkles className="w-5 h-5" />, text: "Custom Menus" },
                  { icon: <Star className="w-5 h-5" />, text: "Toppings Bar" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FCD34D]">{f.icon}</span>
                    <span className="text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <form className="bg-white rounded-3xl p-8 space-y-4">
              <h3 className="font-[family-name:var(--font-fredoka)] font-bold text-xl text-[#1C1917]">
                Get a Catering Quote
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Guest Count"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
                />
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]/50">
                  <option value="">Event Type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="school">School Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your event and any special requests..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FCD34D]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#1C1917]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors"
              >
                Send Catering Request
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#F97316] to-[#FCD34D]">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Instagram className="w-12 h-12 text-white mx-auto mb-4" />
            </motion.div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl font-bold text-white mb-3">
              Follow the Cheesy Goodness
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto font-medium">
              Daily location drops, behind-the-scenes content, and mac pics that
              will make you drool. You know you want to.
            </p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white text-[#F97316] font-bold px-8 py-4 rounded-full text-lg shadow-lg"
            >
              @MacORoniTucson
            </motion.a>
          </div>
        </FadeIn>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 px-6 bg-[#FFFBEB]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-fredoka)] text-4xl font-bold text-[#1C1917]">
                Say Cheese!
              </h2>
              <p className="text-[#1C1917]/50 mt-3">Got questions? We got answers (and mac).</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                label: "Call Us",
                value: "(520) 555-MACS",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "hello@macoroni.com",
              },
              {
                icon: <Instagram className="w-6 h-6" />,
                label: "Instagram",
                value: "@MacORoniTucson",
              },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, rotate: 1 }}
                  className="bg-white rounded-3xl p-6 text-center shadow-md border-2 border-[#FCD34D]/20"
                >
                  <div className="text-[#F97316] mb-3 flex justify-center">
                    {c.icon}
                  </div>
                  <p className="text-[#1C1917]/40 text-sm mb-1">{c.label}</p>
                  <p className="text-[#1C1917] font-bold">{c.value}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1917] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-[family-name:var(--font-fredoka)] font-bold text-2xl mb-4">
                <span className="text-[#F97316]">Mac</span>
                <span className="text-white">-O-</span>
                <span className="text-[#FCD34D]">Roni</span>
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Tucson&apos;s favorite mac and cheese food truck. Gourmet loaded
                mac, rolling through the city six days a week.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Fan Favorites</h5>
              <ul className="space-y-2 text-white/40 text-sm">
                <li>The OG Classic</li>
                <li>Truffle Shuffle</li>
                <li>BBQ Brisket Mac</li>
                <li>Buffalo Chicken Mac</li>
                <li>Mac Bites</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-white/40 text-sm">
                <li><a href="#menu" className="hover:text-[#FCD34D]">Menu</a></li>
                <li><a href="#toppings" className="hover:text-[#FCD34D]">Toppings</a></li>
                <li><a href="#schedule" className="hover:text-[#FCD34D]">Schedule</a></li>
                <li><a href="#catering" className="hover:text-[#FCD34D]">Catering</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} Mac-O-Roni. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Built by Digital Official
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
