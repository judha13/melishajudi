export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Project Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
