import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionCookieValue } from "@/lib/auth";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * Ausnahme fuer die lokale Entwicklung.
   *
   * Der Login laeuft ueber Google OAuth, und GOOGLE_CLIENT_ID sowie
   * GOOGLE_CLIENT_SECRET liegen ausschliesslich bei Vercel. Lokal konnte der
   * Login deshalb gar nicht durchlaufen: die Seite war auf dem eigenen Rechner
   * schlicht nicht zu oeffnen, auch nicht mit gueltigen Zugangsdaten.
   *
   * Die Ausnahme haengt allein an NODE_ENV. Den Wert setzt das Framework, nicht
   * die Konfiguration: "development" gilt ausschliesslich fuer den lokalen
   * Entwicklungsserver. Jeder Build auf Vercel laeuft unter "production", und
   * zwar auch fuer Preview-Deployments. Der Schutz der veroeffentlichten Demo
   * bleibt davon also unberuehrt.
   */
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }
  const session = verifySessionCookieValue(request.cookies.get(SESSION_COOKIE)?.value);

  if (pathname === "/login") {
    if (session) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
