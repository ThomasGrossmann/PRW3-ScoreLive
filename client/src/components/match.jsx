const Match = ({ match }) => {
    let matchTimer = "Q" + match.currentQt + " - " + match.timeLeft;

    return (
        <>
            {match.currentQt !== 0 ?
                <div className="border border-[#F3B17E] w-min text-xs px-2 absolute -mt-2 ml-4 bg-black">
                    <span>LIVE</span>
                    <div className="w-2 h-2 rounded-full animate-ping bg-red-600 absolute -top-1 -right-1"></div>
                    <div className="w-2 h-2 rounded-full bg-red-600 absolute -top-1 -right-1"></div>
                </div> : null}
            <div className="flex flex-row justify-between items-center p-4 rounded-xl border border-[#F3B17E] text-2xl font-bold hover:bg-[#F3B17E] hover:border-black hover:text-black">
                <span className="flex flex-1 justify-start">{match.teams[0].name}</span>
                <div className="flex flex-col text-center">
                    {match.currentQt === 0 ?
                        <span>{match.time}</span> :
                        <div>
                            <div className="flex flex-row gap-4">
                                <span>{match.teams[0].score}</span>
                                -
                                <span>{match.teams[1].score}</span>
                            </div>
                            <div>
                                <span className="text-sm opacity-75">
                                    {matchTimer}
                                </span>
                            </div>
                        </div>}
                </div>
                <span className="flex flex-1 justify-end">{match.teams[1].name}</span>
            </div>
        </>
    );
}

export default Match;