export default function Logo_fixer({src, text}) {
    return (
        <>
            <div className={"flex flex-col items-center space-y-2 lg:flex-row"}>
                <picture className="w-4">
                    <img src={src} />
                </picture>
                <p className="text-sm">
                    {text}
                </p>
            </div>
        </>
    )
}
    