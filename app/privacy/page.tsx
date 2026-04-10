import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Summit Home Remodeling",
  description:
    "Privacy policy for summithomeremodeling.com — how we collect, use, and protect your information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className='container-site mx-auto px-4 md:px-8 py-16 max-w-3xl'>
      <nav className='mb-8'>
        <ol className='flex items-center gap-2 text-xs font-body text-muted-foreground'>
          <li>
            <Link href='/' className='hover:text-gold transition-colors'>
              Home
            </Link>
          </li>
          <li aria-hidden='true'>/</li>
          <li className='text-foreground'>Privacy Policy</li>
        </ol>
      </nav>

      <h1 className='font-display text-3xl font-bold text-foreground mb-8'>
        Privacy Policy
      </h1>

      <div className='prose prose-sm max-w-none space-y-6 font-body text-muted-foreground leading-relaxed'>
        <p>
          <strong className='text-foreground'>Effective date:</strong> January
          1, 2025
        </p>
        <p>
          Summit Home Remodeling (&quot;Summit,&quot; &quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;) operates summithomeremodeling.com
          (the &quot;Site&quot;). This policy describes how we collect and use
          information when you visit our Site or contact us.
        </p>

        <h2 className='font-display text-xl font-bold text-foreground'>
          Information We Collect
        </h2>
        <p>
          We collect information you provide directly — such as your name, phone
          number, email address, and project details — when you submit a contact
          form or call us. We also collect standard web analytics data (pages
          visited, browser type, general location) through analytics tools.
        </p>

        <h2 className='font-display text-xl font-bold text-foreground'>
          How We Use Your Information
        </h2>
        <ul className='list-disc pl-5 space-y-1'>
          <li>To respond to your inquiry and schedule consultations</li>
          <li>To provide estimates and manage your project</li>
          <li>To improve the Site and understand visitor behavior</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className='font-display text-xl font-bold text-foreground'>
          Information Sharing
        </h2>
        <p>
          We do not sell your personal information. We do not share your
          information with third parties except as required to communicate with
          you (email service providers), analyze site usage (analytics tools),
          or comply with law.
        </p>

        <h2 className='font-display text-xl font-bold text-foreground'>
          Data Retention
        </h2>
        <p>
          We retain contact form submissions and project-related correspondence
          for up to 7 years for business record purposes. You may request
          deletion by contacting us at the email below.
        </p>

        <h2 className='font-display text-xl font-bold text-foreground'>
          Contact
        </h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a
            href='mailto:hello@summithomeremodeling.com'
            className='text-gold hover:underline'
          >
            hello@summithomeremodeling.com
          </a>{" "}
          or call{" "}
          <a href='tel:+14793194200' className='text-gold hover:underline'>
            (479) 319-4200
          </a>
          .
        </p>
      </div>
    </div>
  );
}
