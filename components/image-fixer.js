export default function Image_fixer({src, text}) {
    return (
        <>
            <div className={"flex flex-col items-center gap-5"}>
                <picture className="w-44 lg:w-80">
                    <img src={src} />
                </picture>
                <p className="text-2xl text-zinc-700 font-medium lg:hidden">
                    {text}
                </p>
            </div>
        </>
    )
}