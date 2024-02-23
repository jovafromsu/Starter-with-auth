"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        setLoading(false);
        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success("Login success");
            router.push(callbackUrl);
        }
    };
    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-90">
                    <div className="col-lg-5 p-4 shadow">
                        <h2 className="mb-4 lead fw-bold">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control p-3 mb-4"
                                placeholder="Your email"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control p-3 mb-4"
                                placeholder="Your password"
                            />
                            <button
                                className="btn btn-lg btn-primary w-100"
                                disabled={loading || !email || !password}
                            >
                                {loading ? "Please wait.." : "Submit"}
                            </button>
                        </form>

                        <button className="btn btn-lg btn-danger w-100 my-4" onClick={() => signIn("google", { callbackUrl })}>
                            Sign in with Google
                        </button>

                        <Link className="nav-link text-center" href="/forgot-password">
                            Forgot Password
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
// without next-auth configuration, you get redirected to error page