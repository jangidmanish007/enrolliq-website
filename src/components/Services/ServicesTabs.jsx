'use client';

import { useState, useRef, useEffect, useCallback, forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Globe2,
  PhoneCall,
  Megaphone,
  Mail,
  MessageCircle,
  FileSpreadsheet,
  Zap,
  Video,
  CheckCircle2,
  ArrowRight,
  Send,
  ArrowRightLeft,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   INLINE SVG LOGOS
   (high-fidelity versions — one per integration)
───────────────────────────────────────────── */

function GoogleLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-800">Google</span>
    </div>
  );
}

function FacebookLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-[#1877F2]">facebook</span>
    </div>
  );
}

function ShikshaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#shiksha-grad)" />
        <path d="M16 8L7 13L16 18L25 13L16 8Z" fill="#FFFFFF" />
        <path
          d="M10 15.5V20.5C10 22.5 12.7 24 16 24C19.3 24 22 22.5 22 20.5V15.5"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M25 13.5V19.5" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" />
        <defs>
          <linearGradient id="shiksha-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A00" />
            <stop offset="1" stopColor="#E05305" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-extrabold text-sm tracking-tight text-[#E05305]">
        shiksha<span className="text-slate-700">.com</span>
      </span>
    </div>
  );
}

function CollegeDuniaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#001E3C" />
        <path d="M16 7L6 12.5L16 18L26 12.5L16 7Z" fill="#FF9900" />
        <path
          d="M9 15.2V21C9 23.2 12.1 25 16 25C19.9 25 23 23.2 23 21V15.2"
          stroke="#FF9900"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-[#001E3C]">
        college<span className="text-[#FF9900]">dunia</span>
      </span>
    </div>
  );
}

function EdustokeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#edustoke-grad)" />
        <path
          d="M16 10V22M11 14L16 10L21 14M12 18L16 22L20 18"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="edustoke-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C853" />
            <stop offset="1" stopColor="#007E33" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-extrabold text-sm tracking-tight text-[#008344]">edustoke</span>
    </div>
  );
}

function MyOperatorLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#E53935" />
        <path
          d="M16 8C11.6 8 8 11.6 8 16V20C8 21.1 8.9 22 10 22H11C11.6 22 12 21.6 12 21V17C12 16.4 11.6 16 11 16H9.6C9.9 12.6 12.6 10 16 10C19.4 10 22.1 12.6 22.4 16H21C20.4 16 20 16.4 20 17V21C20 21.6 20.4 22 21 22H22C23.1 22 24 21.1 24 20V16C24 11.6 20.4 8 16 8Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="font-extrabold text-sm tracking-tight text-[#D32F2F]">
        My<span className="text-slate-900">Operator</span>
      </span>
    </div>
  );
}

function TeleCMILogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0284C7" />
        <path
          d="M9 18C9 14.1 12.1 11 16 11C19.9 11 23 14.1 23 18"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="20" r="1.8" fill="#FFFFFF" />
      </svg>
      <span className="font-extrabold text-sm tracking-tight text-[#0284C7]">
        Tele<span className="text-slate-900">CMI</span>
      </span>
    </div>
  );
}

function GoogleAdsLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 192 192" className="w-5 h-5 shrink-0">
        <path
          fill="#FBBC04"
          d="M39.6 156.4c-19.7 0-35.6-16-35.6-35.6 0-7 2.1-13.6 5.6-19.1l54.8-95c5.5-9.6 15.8-15.6 27.2-15.6 19.7 0 35.6 16 35.6 35.6 0 7-2.1 13.6-5.6 19.1l-54.8 95c-5.5 9.6-15.8 15.6-27.2 15.6z"
        />
        <path
          fill="#4285F4"
          d="M152.4 156.4c-11.4 0-21.7-6-27.2-15.6l-54.8-95c-3.5-5.5-5.6-12.1-5.6-19.1 0-19.7 16-35.6 35.6-35.6 11.4 0 21.7 6 27.2 15.6l54.8 95c3.5 5.5 5.6 12.1 5.6 19.1 0 19.7-16 35.6-35.6 35.6z"
        />
        <circle fill="#34A853" cx="39.6" cy="120.8" r="35.6" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Google Ads</span>
    </div>
  );
}

function GoogleMyBusinessLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#4285F4" />
        <path d="M8 12L16 7L24 12V14H8V12Z" fill="#FFFFFF" />
        <path d="M10 14V22H22V14" fill="#E8F0FE" />
        <rect x="13" y="16" width="6" height="6" rx="1" fill="#4285F4" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Google Business</span>
    </div>
  );
}

function MetaInstantFormsLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0081FB" />
        <path
          d="M23.5 12.8C22.6 11.2 21 10.3 19.3 10.3C17.6 10.3 16.3 11.2 15 12.8C13.7 11.2 12.4 10.3 10.7 10.3C9 10.3 7.4 11.2 6.5 12.8C5.2 15 5.2 18.2 6.7 20.3C7.6 21.7 9.1 22.5 10.7 22.5C12.4 22.5 13.7 21.6 15 20C16.3 21.6 17.6 22.5 19.3 22.5C20.9 22.5 22.4 21.7 23.3 20.3C24.8 18.2 24.8 15 23.5 12.8Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Meta Lead Ads</span>
    </div>
  );
}

function MetaConversionsApiLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0064E0" />
        <path d="M12 9L7 16H13L11 23L20 14H14L17 9H12Z" fill="#FFFFFF" />
        <circle cx="23" cy="9" r="2.5" fill="#00F0FF" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Meta CAPI</span>
    </div>
  );
}

function AwsSesLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#232F3E" />
        <path d="M8 11L16 16.5L24 11V21H8V11Z" fill="#FF9900" />
        <path d="M8 11L16 16.5L24 11H8Z" fill="#FFB84D" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Amazon SES</span>
    </div>
  );
}

function EmailCampaignsLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
        <Send className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="font-bold text-sm tracking-tight text-slate-900">Campaign Studio</span>
    </div>
  );
}

function WhatsAppLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <span className="font-bold text-sm tracking-tight text-[#25D366]">WhatsApp</span>
    </div>
  );
}

function GoogleSheetsLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0F9D58" />
        <path d="M10 9H22V23H10V9Z" fill="#FFFFFF" />
        <path d="M10 13H22M10 17H22M15 9V23" stroke="#0F9D58" strokeWidth="1.5" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-slate-900">Google Sheets</span>
    </div>
  );
}

function CsvImportLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shrink-0">
        <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="font-bold text-sm tracking-tight text-slate-900">CSV & Excel Loader</span>
    </div>
  );
}

function FieldMappingLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shrink-0">
        <ArrowRightLeft className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="font-bold text-sm tracking-tight text-slate-900">Field Mapping</span>
    </div>
  );
}

function ZapierLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FF4A00" />
        <path
          d="M16 7V25M7 16H25M9.6 9.6L22.4 22.4M9.6 22.4L22.4 9.6"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-extrabold text-sm tracking-tight text-[#FF4A00]">zapier</span>
    </div>
  );
}

function CalendlyLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#006BFF" />
        <path
          d="M19.5 10.5C18.5 9.5 17.1 9 15.5 9C12.2 9 9.5 11.7 9.5 15C9.5 18.3 12.2 21 15.5 21C17.1 21 18.5 20.5 19.5 19.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="19.5" cy="15" r="1.8" fill="#FFFFFF" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-[#006BFF]">Calendly</span>
    </div>
  );
}

function ZoomMeetLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#2D8CFF" />
        <path
          d="M8 12C8 10.9 8.9 10 10 10H18C19.1 10 20 10.9 20 12V20C20 21.1 19.1 22 18 22H10C8.9 22 8 21.1 8 20V12Z"
          fill="#FFFFFF"
        />
        <path d="M20 14L24 11V21L20 18V14Z" fill="#FFFFFF" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-[#2D8CFF]">Zoom & Meet</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABS DATA — sourced from serviceCategories
   (menuTitle → label, title → headline,
   descriptionTop/Bottom → description, logos added)
───────────────────────────────────────────── */
const tabs = [
  {
    id: 'social-plugins',
    label: 'Social Plugins',
    icon: Share2,
    badge: 'Audience Sync',
    color: 'violet',
    number: '01',
    headline: 'Social Plugins',
    tagline: 'Keep your Google & Facebook audiences in sync automatically.',
    description:
      'Automate recurring audience push to your Google and Facebook accounts and forget needing to sync your data ever again. Create custom audience lists directly from the lead or application manager with advanced filters at your disposal. Through advanced Google/Facebook lead capturing, centralize your incoming leads and add them to your existing lead pool to ensure 360° nurturing.',
    features: [
      {
        title: 'Automated audience push',
        desc: 'Updated audience lists sync to Google and Facebook without manual exports.',
      },
      {
        title: 'Custom filtered lists',
        desc: 'Build segmented audience lists straight from the lead or application manager.',
      },
      {
        title: 'Advanced lead capturing',
        desc: 'Pull leads from Google and Facebook straight into your existing pool.',
      },
      { title: '360° nurturing', desc: 'Every captured lead is folded into your regular nurture flow automatically.' },
    ],
    stat: { value: 'Live', label: 'two-way audience sync' },
    logos: {
      label: 'Connected platforms',
      items: [
        { node: <GoogleLogo key="g" />, name: 'Google' },
        { node: <FacebookLogo key="fb" />, name: 'Facebook' },
      ],
    },
  },
  {
    id: 'lead-generation-websites',
    label: 'Lead Generation Websites',
    icon: Globe2,
    badge: 'Aggregators & Portals',
    color: 'blue',
    number: '02',
    headline: 'Lead Generation Websites',
    tagline: 'Every aggregator lead lands in one place, instantly.',
    description:
      'Say goodbye to storing and matching your data in spreadsheets or toggling between platforms to keep a track of the leads being generated. Integrate your third-party lead sources with your platform to have a real-time check-in of the leads, from inquiry to enrollment. Direct API webhooks ingest student inquiries instantaneously with automated deduplication and counselor assignment in under 2 seconds.',
    features: [
      { title: 'Real-time API ingestion', desc: 'Webhooks pull in inquiries from portals the moment they come in.' },
      { title: 'Automated deduplication', desc: 'Duplicate leads across aggregators are merged automatically.' },
      { title: 'Instant counselor assignment', desc: 'New leads are routed to a counselor in under 2 seconds.' },
      { title: 'Inquiry-to-enrollment tracking', desc: 'Follow every lead through the full journey in one view.' },
    ],
    stat: { value: '<2s', label: 'counselor assignment time' },
    logos: {
      label: 'Connected portals',
      items: [
        { node: <ShikshaLogo key="shiksha" />, name: 'Shiksha' },
        { node: <CollegeDuniaLogo key="collegedunia" />, name: 'CollegeDunia' },
        { node: <EdustokeLogo key="edustoke" />, name: 'Edustoke' },
      ],
    },
  },
  {
    id: 'cloud-telephony-solutions',
    label: 'Cloud Telephony Solutions',
    icon: PhoneCall,
    badge: 'Voice & Calling',
    color: 'cyan',
    number: '03',
    headline: 'Cloud Telephony Solutions',
    tagline: 'Every call logged, recorded, and ready for review.',
    description:
      'Empower your counselors with one-click dialers directly from the student timeline. Every inbound and outbound call is automatically logged, recorded, and analyzed with call duration and disposition tagging. Integrate enterprise cloud telephony systems like MyOperator and TeleCMI to enable smart IVR routing, virtual receptionist numbers, and agent performance leaderboards.',
    features: [
      { title: 'One-click dialer', desc: 'Call students directly from their timeline with a single click.' },
      {
        title: 'Automatic call logging',
        desc: 'Every call is recorded and logged with duration and disposition tags.',
      },
      { title: 'Smart IVR routing', desc: 'Route calls with virtual receptionist numbers and smart IVR menus.' },
      { title: 'Agent leaderboards', desc: 'Track counselor call performance in a live leaderboard.' },
    ],
    stat: { value: '100%', label: 'calls logged automatically' },
    logos: {
      label: 'Connected telephony systems',
      items: [
        { node: <MyOperatorLogo key="myoperator" />, name: 'MyOperator' },
        { node: <TeleCMILogo key="telecmi" />, name: 'TeleCMI' },
      ],
    },
  },
  {
    id: 'ads-campaigns',
    label: 'ADs & Paid Campaigns',
    icon: Megaphone,
    badge: 'Performance Marketing',
    color: 'purple',
    number: '04',
    headline: 'ADs & Paid Campaign Management',
    tagline: 'Turn ad spend into admissions you can trace back to the source.',
    description:
      'Connect your Google Ads, Google My Business, and Meta campaign accounts to seamlessly capture instant lead forms and pass server-side conversion signals back to advertising algorithms for optimized cost-per-lead (CPL). Track full-funnel multi-touch attribution: know exactly which campaign, ad set, creative, and keyword triggered each admitted student.',
    features: [
      {
        title: 'Instant lead capture',
        desc: 'Google and Meta instant-form leads are captured the moment they submit.',
      },
      { title: 'Server-side conversions', desc: 'Conversion signals are sent back to ad platforms for a lower CPL.' },
      {
        title: 'Full-funnel attribution',
        desc: 'See exactly which campaign, ad set, and keyword led to each admission.',
      },
      { title: 'Local inquiry tracking', desc: 'Track Google My Business inquiries alongside paid campaigns.' },
    ],
    stat: { value: '4.8x', label: 'average ROAS' },
    logos: {
      label: 'Connected ad platforms',
      items: [
        { node: <GoogleAdsLogo key="gads" />, name: 'Google Ads' },
        { node: <GoogleMyBusinessLogo key="gmb" />, name: 'Google Business' },
        { node: <MetaInstantFormsLogo key="meta-forms" />, name: 'Meta Lead Ads' },
        { node: <MetaConversionsApiLogo key="meta-capi" />, name: 'Meta CAPI' },
      ],
    },
  },
  {
    id: 'email-connector',
    label: 'Email Connector',
    icon: Mail,
    badge: 'High Deliverability',
    color: 'emerald',
    number: '05',
    headline: 'Email Connectors & Campaign Studio',
    tagline: 'Institutional email that actually reaches the inbox.',
    description:
      'Connect your institutional email infrastructure via Amazon SES or custom SMTP relays. Build responsive drag-and-drop email templates, trigger behavior-driven automated drips, and monitor open and click rates in real time. Ensure 99.8% inbox deliverability with dedicated IP routing, SPF/DKIM verification, and automated unsubscribe compliance.',
    features: [
      { title: 'SES / SMTP integration', desc: 'Connect Amazon SES or a custom SMTP relay for institutional email.' },
      { title: 'Drag-and-drop builder', desc: 'Build responsive email templates without writing code.' },
      { title: 'Behavior-triggered drips', desc: 'Automated sequences fire based on how a student engages.' },
      { title: 'High deliverability', desc: 'Dedicated IPs and SPF/DKIM verification keep you out of spam.' },
    ],
    stat: { value: '99.8%', label: 'inbox deliverability' },
    logos: {
      label: 'Connected email infrastructure',
      items: [
        { node: <AwsSesLogo key="ses" />, name: 'Amazon SES' },
        { node: <EmailCampaignsLogo key="campaigns" />, name: 'Campaign Studio' },
      ],
    },
  },
  {
    id: 'messaging-whatsapp',
    label: 'Messaging & WhatsApp',
    icon: MessageCircle,
    badge: 'Instant Chat',
    color: 'rose',
    number: '06',
    headline: 'Messaging & WhatsApp Business API',
    tagline: 'Meet applicants on the channel they actually check.',
    description:
      'Engage applicants instantly on their favorite channel. Use the official WhatsApp Business Cloud API to send broadcast alerts, entrance exam reminders, application fee links, and automated two-way chatbots. Equip counselors with a shared multi-agent WhatsApp team inbox so no student inquiry remains unanswered.',
    features: [
      { title: 'Official WhatsApp API', desc: 'Send broadcasts, reminders, and fee links via the Business Cloud API.' },
      { title: 'Two-way chatbots', desc: 'Automate common questions with conversational, two-way flows.' },
      { title: 'Shared team inbox', desc: 'Counselors work from one shared inbox so nothing goes unanswered.' },
      { title: 'Exam & fee alerts', desc: 'Entrance exam reminders and fee links go out automatically.' },
    ],
    stat: { value: '1', label: 'shared team inbox' },
    logos: {
      label: 'Connected channel',
      items: [{ node: <WhatsAppLogo key="whatsapp" />, name: 'WhatsApp' }],
    },
  },
  {
    id: 'lead-import-mapping',
    label: 'Lead Import & Mapping',
    icon: FileSpreadsheet,
    badge: 'Data Management',
    color: 'amber',
    number: '07',
    headline: 'Lead Import & Intelligent Field Mapping',
    tagline: 'Bring offline leads in as cleanly as digital ones.',
    description:
      'Import offline walk-ins, seminar attendees, and education fair contacts seamlessly. Sync directly with live Google Sheets or upload CSV spreadsheets with our visual column-to-field mapper. Automatic data hygiene rules normalize phone numbers, validate email syntaxes, and tag custom acquisition source codes on upload.',
    features: [
      { title: 'Live Sheets sync', desc: 'Sync directly with a live Google Sheet — no re-uploading needed.' },
      { title: 'CSV & Excel upload', desc: 'Import walk-ins and fair contacts from a spreadsheet in minutes.' },
      { title: 'Visual field mapper', desc: 'Match spreadsheet columns to CRM fields with a visual mapper.' },
      { title: 'Automatic data hygiene', desc: 'Phone numbers, emails, and source tags are normalized on upload.' },
    ],
    stat: { value: 'Auto', label: 'data hygiene on import' },
    logos: {
      label: 'Import sources',
      items: [
        { node: <GoogleSheetsLogo key="gsheets" />, name: 'Google Sheets' },
        { node: <CsvImportLogo key="csv" />, name: 'CSV & Excel' },
        { node: <FieldMappingLogo key="fieldmap" />, name: 'Field Mapping' },
      ],
    },
  },
  {
    id: 'automation-plugin',
    label: 'Automation Plugin',
    icon: Zap,
    badge: 'Workflows & Calendars',
    color: 'teal',
    number: '08',
    headline: 'Automation Plugins & Scheduling',
    tagline: 'Let the routine work run itself.',
    description:
      'Connect EnrollIQ to over 5,000+ apps with Zapier. Create automated event triggers such as creating calendar events, pushing data to internal data warehouses, or notifying Slack channels on high-priority lead conversion. Embed Calendly directly into your applicant portal so prospective students can self-schedule 1-on-1 counseling and campus tour appointments.',
    features: [
      { title: '5,000+ app triggers', desc: 'Connect EnrollIQ to thousands of apps through Zapier.' },
      {
        title: 'Custom event workflows',
        desc: 'Trigger calendar events, warehouse syncs, or Slack alerts automatically.',
      },
      { title: 'Priority-lead notifications', desc: 'Get notified the moment a high-priority lead converts.' },
      { title: 'Self-service booking', desc: 'Applicants self-schedule counseling and campus tours via Calendly.' },
    ],
    stat: { value: '5,000+', label: 'app integrations via Zapier' },
    logos: {
      label: 'Connected automation tools',
      items: [
        { node: <ZapierLogo key="zapier" />, name: 'Zapier' },
        { node: <CalendlyLogo key="calendly" />, name: 'Calendly' },
      ],
    },
  },
  {
    id: 'video-meeting-scheduler',
    label: 'Video Meeting Scheduler',
    icon: Video,
    badge: 'Interviews',
    color: 'orange',
    number: '09',
    headline: 'Video Meeting & Interview Scheduler',
    tagline: 'A meeting link, ready before anyone asks for one.',
    description:
      'Generate dynamic Zoom or Google Meet links automatically whenever a student or parent books a counseling slot or faculty interview. Include meeting access codes, calendar invites (.ics), and automated 1-hour pre-meeting reminders via WhatsApp.',
    features: [
      { title: 'Auto-generated links', desc: 'A Zoom or Google Meet link is created the moment a slot is booked.' },
      { title: 'Calendar invites', desc: '.ics invites and access codes are sent out automatically.' },
      { title: 'Pre-meeting reminders', desc: 'A WhatsApp reminder goes out an hour before each meeting.' },
      { title: 'Counseling & interviews', desc: 'Works for student counseling calls and faculty interviews alike.' },
    ],
    stat: { value: '1hr', label: 'before-meeting reminder' },
    logos: {
      label: 'Connected meeting tools',
      items: [{ node: <ZoomMeetLogo key="zoom" />, name: 'Zoom & Meet' }],
    },
  },
];

/* ─────────────────────────────────────────────
   COLOR MAP
───────────────────────────────────────────── */
const colorMap = {
  violet: {
    accent: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    activeBg: 'bg-violet-50 border-violet-200',
    activeText: 'text-violet-700',
    activeIcon: 'text-violet-600',
    indicator: 'bg-violet-500',
    statColor: 'text-violet-600',
    statBg: 'bg-violet-50 border-violet-100',
    featureIcon: 'text-violet-500 bg-violet-50',
    number: 'text-violet-300',
    logoBorder: 'hover:border-violet-300/70',
  },
  blue: {
    accent: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    activeBg: 'bg-blue-50 border-blue-200',
    activeText: 'text-blue-700',
    activeIcon: 'text-blue-600',
    indicator: 'bg-blue-500',
    statColor: 'text-blue-600',
    statBg: 'bg-blue-50 border-blue-100',
    featureIcon: 'text-blue-500 bg-blue-50',
    number: 'text-blue-300',
    logoBorder: 'hover:border-blue-300/70',
  },
  cyan: {
    accent: 'text-cyan-600',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    activeBg: 'bg-cyan-50 border-cyan-200',
    activeText: 'text-cyan-700',
    activeIcon: 'text-cyan-600',
    indicator: 'bg-cyan-500',
    statColor: 'text-cyan-600',
    statBg: 'bg-cyan-50 border-cyan-100',
    featureIcon: 'text-cyan-500 bg-cyan-50',
    number: 'text-cyan-300',
    logoBorder: 'hover:border-cyan-300/70',
  },
  purple: {
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    activeBg: 'bg-purple-50 border-purple-200',
    activeText: 'text-purple-700',
    activeIcon: 'text-purple-600',
    indicator: 'bg-purple-500',
    statColor: 'text-purple-600',
    statBg: 'bg-purple-50 border-purple-100',
    featureIcon: 'text-purple-500 bg-purple-50',
    number: 'text-purple-300',
    logoBorder: 'hover:border-purple-300/70',
  },
  emerald: {
    accent: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    activeBg: 'bg-emerald-50 border-emerald-200',
    activeText: 'text-emerald-700',
    activeIcon: 'text-emerald-600',
    indicator: 'bg-emerald-500',
    statColor: 'text-emerald-600',
    statBg: 'bg-emerald-50 border-emerald-100',
    featureIcon: 'text-emerald-500 bg-emerald-50',
    number: 'text-emerald-300',
    logoBorder: 'hover:border-emerald-300/70',
  },
  rose: {
    accent: 'text-rose-600',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    activeBg: 'bg-rose-50 border-rose-200',
    activeText: 'text-rose-700',
    activeIcon: 'text-rose-600',
    indicator: 'bg-rose-500',
    statColor: 'text-rose-600',
    statBg: 'bg-rose-50 border-rose-100',
    featureIcon: 'text-rose-500 bg-rose-50',
    number: 'text-rose-300',
    logoBorder: 'hover:border-rose-300/70',
  },
  amber: {
    accent: 'text-amber-600',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    activeBg: 'bg-amber-50 border-amber-200',
    activeText: 'text-amber-700',
    activeIcon: 'text-amber-600',
    indicator: 'bg-amber-500',
    statColor: 'text-amber-600',
    statBg: 'bg-amber-50 border-amber-100',
    featureIcon: 'text-amber-500 bg-amber-50',
    number: 'text-amber-300',
    logoBorder: 'hover:border-amber-300/70',
  },
  teal: {
    accent: 'text-teal-600',
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    activeBg: 'bg-teal-50 border-teal-200',
    activeText: 'text-teal-700',
    activeIcon: 'text-teal-600',
    indicator: 'bg-teal-500',
    statColor: 'text-teal-600',
    statBg: 'bg-teal-50 border-teal-100',
    featureIcon: 'text-teal-500 bg-teal-50',
    number: 'text-teal-300',
    logoBorder: 'hover:border-teal-300/70',
  },
  orange: {
    accent: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    activeBg: 'bg-orange-50 border-orange-200',
    activeText: 'text-orange-700',
    activeIcon: 'text-orange-600',
    indicator: 'bg-orange-500',
    statColor: 'text-orange-600',
    statBg: 'bg-orange-50 border-orange-100',
    featureIcon: 'text-orange-500 bg-orange-50',
    number: 'text-orange-300',
    logoBorder: 'hover:border-orange-300/70',
  },
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT (UI unchanged from original)
───────────────────────────────────────────── */
export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const sectionRefs = useRef(Object.fromEntries(tabs.map(({ id }) => [id, { current: null }])));
  const tabBtnRefs = useRef({});
  const desktopListRef = useRef(null);
  const mobileListRef = useRef(null);
  const isClickScrolling = useRef(false);

  const centerTab = useCallback((id) => {
    const btn = tabBtnRefs.current[id];

    const vl = desktopListRef.current;
    if (vl && btn) {
      vl.scrollTo({
        top: btn.offsetTop - vl.clientHeight / 2 + btn.offsetHeight / 2,
        behavior: 'smooth',
      });
    }

    const hl = mobileListRef.current;
    if (hl) {
      const mBtn = hl.querySelector(`[data-tabid="${id}"]`);
      if (mBtn) {
        hl.scrollTo({
          left: mBtn.offsetLeft - hl.clientWidth / 2 + mBtn.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  useEffect(() => {
    const observers = [];

    tabs.forEach(({ id }) => {
      const el = sectionRefs.current[id]?.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveTab(id);
            centerTab(id);
          }
        },
        { threshold: 0, rootMargin: '-38% 0px -38% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [centerTab]);

  const handleTabClick = useCallback(
    (id) => {
      setActiveTab(id);
      centerTab(id);

      const el = sectionRefs.current[id]?.current;
      if (!el) return;

      isClickScrolling.current = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 900);
    },
    [centerTab],
  );

  return (
    <section id="crm" className="bg-background scroll-mt-20">
      {/* MOBILE — sticky horizontal tab strip */}
      <div className="lg:hidden sticky top-[60px] z-30 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div
          ref={mobileListRef}
          className="flex gap-2 overflow-x-auto px-4 py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map(({ id, label, icon: Icon, color }) => {
            const c = colorMap[color];
            const isActive = id === activeTab;
            return (
              <button
                key={id}
                data-tabid={id}
                onClick={() => handleTabClick(id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? `${c.activeBg} ${c.activeText} shadow-sm`
                    : 'border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? c.activeIcon : ''}`} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP — two-column layout */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 xl:px-16 py-16 lg:py-20">
        <div className="flex gap-0 lg:gap-10 xl:gap-14">
          {/* LEFT: sticky tab nav */}
          <aside className="hidden lg:block w-[230px] xl:w-[260px] shrink-0">
            <div
              className="sticky top-[60px] max-h-[calc(100vh-76px)] overflow-y-auto py-8 pr-2"
              ref={desktopListRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/50 mb-4 px-3">
                Product Modules
              </p>

              <nav className="flex flex-col gap-0.5" aria-label="Service modules">
                {tabs.map(({ id, label, icon: Icon, color, number }) => {
                  const c = colorMap[color];
                  const isActive = id === activeTab;
                  return (
                    <button
                      key={id}
                      ref={(el) => {
                        tabBtnRefs.current[id] = el;
                      }}
                      onClick={() => handleTabClick(id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group relative flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? `${c.activeBg} ${c.activeText} shadow-sm`
                          : 'border-transparent bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60 hover:border-border/50'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tabIndicator"
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full ${c.indicator}`}
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}

                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                          isActive ? c.number : 'text-muted-foreground/30 group-hover:text-muted-foreground/60'
                        }`}
                      >
                        {number}
                      </span>

                      <Icon
                        className={`h-4 w-4 shrink-0 transition-colors ${
                          isActive ? c.activeIcon : 'text-muted-foreground/50 group-hover:text-muted-foreground'
                        }`}
                      />

                      <span className="truncate leading-snug">{label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom promo */}
              <div className="mt-8 px-1">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-semibold text-foreground/70 mb-3 leading-snug">Ready to see it live?</p>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-primary hover:bg-primary/90 px-3 py-2 text-xs font-bold text-white transition-colors"
                  >
                    Book a demo <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: stacked sections */}
          <div className="flex-1 min-w-0 lg:border-l lg:border-border lg:pl-10 xl:pl-14">
            {tabs.map((tab) => (
              <ServiceSection
                key={tab.id}
                tab={tab}
                ref={(node) => {
                  sectionRefs.current[tab.id].current = node;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICE SECTION (UI unchanged from original)
───────────────────────────────────────────── */
const ServiceSection = forwardRef(function ServiceSection({ tab }, ref) {
  const c = colorMap[tab.color];
  const Icon = tab.icon;

  return (
    <div
      ref={ref}
      id={tab.id}
      data-section={tab.id}
      className="scroll-mt-[76px] py-16 lg:py-20 border-b border-border last:border-b-0"
    >
      <div className="grid grid-cols-1 gap-10 items-start">
        {/* Text column */}
        <div>
          {/* Number + Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-mono font-bold tracking-widest ${c.number} select-none`}>{tab.number}</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide ${c.badge}`}
            >
              <Icon className="h-3 w-3" />
              {tab.badge}
            </span>
          </div>

          {/* Headline (from menuTitle / title) */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2rem] font-extrabold tracking-tight text-foreground leading-[1.13] mb-2.5">
            {tab.headline}
          </h2>

          {/* Tagline */}
          <p className={`text-[15px] font-semibold mb-4 ${c.accent}`}>{tab.tagline}</p>

          {/* Body (updated description) */}
          <p className="text-[14.5px] leading-[1.85] text-muted-foreground mb-8">{tab.description}</p>
        </div>

        {/* Logo chips row — shows the connected services for this tab */}
        {tab.logos && (
          <div className="pt-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/50 mb-3">
              {tab.logos.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {tab.logos.items.map(({ node, name }) => (
                <div
                  key={name}
                  className={`bg-white dark:bg-card border border-slate-200/80 dark:border-border ${c.logoBorder} rounded-xl px-5 py-3 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center min-w-[130px] sm:min-w-[150px] min-h-[56px] cursor-default`}
                >
                  {node}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
