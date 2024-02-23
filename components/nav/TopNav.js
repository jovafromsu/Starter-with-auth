import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useSession, signOut } from "next-auth/react";
export default function TopNav() {
    const { data, status, loading } = useSession();
    return (
        <>
            <nav className="nav shadow justify-content-between mb-4">
                <Link className="nav-link mt-2" href="/">
                    {/* cyclone */}
                    🌀
                </Link>
                <div className="d-flex align-items-center">
                    {status === "authenticated" ? (
                        <>
                            <Link className="nav-link" href="/dashboard/user">
                                {data?.user?.name}
                            </Link>

                            {data?.user?.role
                                ?.filter((r) => r !== "subscriber")
                                .map((r) => (
                                <Link className="nav-link" href={`/dashboard/${r}`}>
                                    {r?.charAt(0).toUpperCase()}
                                    {r?.slice(1)}
                                </Link>
                            ))}

                            <a
                                className="nav-link pointer"
                                onClick={() => signOut({ callbackUrl: "/login" })}
                            >
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link className="nav-link" href="/login">
                                Login
                            </Link>
                            <Link className="nav-link" href="/register">
                                Register
                            </Link>
                        </>
                    )}
                    <a className="nav-link">
                        <ThemeToggle />
                    </a>
                </div>
            </nav>
        </>
    );
}