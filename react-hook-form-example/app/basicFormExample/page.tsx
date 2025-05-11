import BasicFormComponent from "@/components/BasicFormComponent";

export default function BasicFormPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-2xl font-bold">Basic Form Example</h1>
            <BasicFormComponent />
        </div>
    );
}