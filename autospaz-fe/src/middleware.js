import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("tokenResAPIAutos");

  if (!jwt) return NextResponse.redirect(new URL("/Login", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("autos_api_data")
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
}

export const config = {
  matcher: ["/Autos", "/Configuraciones", "/Dashboard", "/Gestiones", "/Revisiones", "/Usuarios", "/Logout"],
};
