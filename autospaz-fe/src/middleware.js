import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("pgDataAutosCookie");

  if (!jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.next(new URL("/Login", request.url));

  if (jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.redirect(new URL("/Dashboard", request.url));

  if (jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.redirect(new URL("/Dashboard", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("pgDataAutos")
    );

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp <= currentTime) {
      return NextResponse.redirect(new URL("/Login", request.url));
    }

    const isAdmin = payload.rol.some((role) => role.name === "admin");

    console.log(!isAdmin && request.nextUrl.pathname === "/Usuarios");
    
    if (!isAdmin && request.nextUrl.pathname === "/Usuarios") {
      return NextResponse.redirect(new URL("/Permisos", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
}

export const config = {
  matcher: [
    "/Login",
    "/Autos",
    "/Configuraciones",
    "/Dashboard",
    "/Gestiones",
    "/Revisiones",
    "/Usuarios",
    "/Logout",
  ],
};
