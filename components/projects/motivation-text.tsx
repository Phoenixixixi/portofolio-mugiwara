
import { FlipWords } from "../ui/flip-words";

export default function MotivationText() {
    const words = ["moving", "walking", "running", "learning", "growing", "building", "creating"];
    return (
        <div className="h-[10rem] flex justify-center items-start px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Keep
                <FlipWords words={words} duration={2000} /> <br />
                Never stop the process
            </div>
        </div>
    )

}