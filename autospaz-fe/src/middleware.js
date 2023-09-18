import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("pgDataAutosCookie");

  if (!jwt) return NextResponse.redirect(new URL("/Login", request.url));
  
  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("pgDataAutos")
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
}

export const config = {
  matcher: [
    "/Autos",
    "/Configuraciones",
    "/Dashboard",
    "/Gestiones",
    "/Revisiones",
    "/Usuarios",
    "/Logout",
  ],
};
