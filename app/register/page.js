"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${process.env.API}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                toast.error(data.err);
                setLoading(false);
                return;
            } else {
                const data = await response.json();
                toast.success(data.success);
                router.push("/login");
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            toast.error("An error occurred. Please try again.");
        }
    };
    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-90">
                    <div className="col-lg-5 p-4 shadow">
                        <h2 className="mb-4 lead fw-bold">Register</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control p-3 mb-4"
                                placeholder="Your name"
                            />
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
                                className="btn btn-lg w-100 btn-primary w-100 mb-2"
                                disabled={loading || !name || !email || !password}
                            >
                                {loading ? "Please wait.." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}