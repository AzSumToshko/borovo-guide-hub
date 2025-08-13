import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";
import { useMemo } from "react";
import { useI18n } from "@/i18n";

const labelKeyFor = (segment: string): string | null => {
  switch (segment) {
    case "about": return "nav.about";
    case "administration":
    case "administrative-services": return "nav.admin";
    case "services": return "nav.services";
    case "news": return "nav.news";
    case "registers": return "nav.registers";
    case "buyer-profile": return "nav.buyer";
    case "declarations": return "nav.declarations";
    case "access-to-information": return "nav.access";
    case "contacts": return "nav.contacts";
    case "council": return "nav.council";
    default: return null;
  }
};

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useI18n();

  const segments = useMemo(() => location.pathname.split("/").filter(Boolean), [location.pathname]);

  const items = useMemo(() => {
    const acc: { href: string; label: string }[] = [];
    let path = "";
    segments.forEach((seg) => {
      path += `/${seg}`;
      const key = labelKeyFor(seg);
      acc.push({ href: path, label: key ? t(key) : decodeURIComponent(seg) });
    });
    return acc;
  }, [segments, t]);

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">{t("breadcrumbs.home")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, idx) => (
            <span key={item.href} className="flex items-center">
              <BreadcrumbSeparator />
              {idx === items.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;
