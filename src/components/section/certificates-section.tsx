import FolderInteraction, {
  type FolderPage,
} from "@/components/ui/folder-interaction";

const certificates = [
  {
    title: "Data Analytics Virtual Internship",
    issuer: "CodeAlpha",
    dates: "January 20 – February 20, 2026",
    issued: "Issued February 21, 2026",
    href: "/certificates/codealpha-data-analytics-internship.pdf",
    preview: "/certificates/codealpha-data-analytics-internship-preview.jpg",
  },
  {
    title: "Full Stack Development Virtual Internship",
    issuer: "CodeAlpha",
    dates: "September 20 – October 20, 2025",
    issued: "Issued November 12, 2025",
    href: "/certificates/codealpha-full-stack-development-internship.pdf",
    preview: "/certificates/codealpha-full-stack-development-internship-preview.jpg",
  },
  {
    title: "Project Management Associate Internship",
    issuer: "Excelerate · Saint Louis University",
    dates: "Completed June 3, 2025",
    href: "/certificates/excelerate-project-management-internship.pdf",
    preview: "/certificates/excelerate-project-management-internship-preview.png",
  },
];

const certificatePages: FolderPage[] = certificates.map((certificate) => ({
  id: certificate.href,
  image: certificate.preview,
  title: `${certificate.issuer} ${certificate.title}`,
  href: certificate.href,
}));

export default function CertificatesSection() {
  return (
    <div>
      <div className="flex min-h-0 w-full flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                Certificates
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              Certificates &amp; credentials
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              A collection of certifications and credentials.
            </p>
          </div>
        </div>
        <FolderInteraction pages={certificatePages} folderName="Certificates" />
      </div>
    </div>
  );
}
