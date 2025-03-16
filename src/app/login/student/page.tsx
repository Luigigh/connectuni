'use client'

import { useRouter } from 'next/navigation';

export default function StudentLogin() {
    const router = useRouter();
    return (
        <div>
            <h1>Student Login</h1>
            <button onClick={() => router.push('/dashboard/student')}>Click me</button>
        </div>
    )
}