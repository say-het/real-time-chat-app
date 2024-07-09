const MessageSkeleton = ()=>{
    return (
        <>
        <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full skeleton shrink-0"></div>
            <div className="flex flex-col gap-1">
                <div className="skeleton w-40 h-4"></div>
                <div className="skeleton w-40 h-4"></div>
            </div>
        </div>
        <br />
        <div className="flex gap-3 items-center justify-end">
            <div className="flex flex-col gap-1">
                <div className="skeleton w-40 h-4"></div>
                <div className="skeleton w-40 h-4"></div>
            </div>
            <div className="w-10 h-10 rounded-full skeleton shrink-0"></div>
        </div>
        <br />
        <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full skeleton shrink-0"></div>
            <div className="flex flex-col gap-1">
                <div className="skeleton w-40 h-4"></div>
                <div className="skeleton w-40 h-4"></div>
            </div>
        </div>
        <br />
        <div className="flex gap-3 items-center justify-end">
            <div className="flex flex-col gap-1">
                <div className="skeleton w-40 h-4"></div>
                <div className="skeleton w-40 h-4"></div>
            </div>
            <div className="w-10 h-10 rounded-full skeleton shrink-0"></div>
        </div>
        </>
    );
}

export default MessageSkeleton;