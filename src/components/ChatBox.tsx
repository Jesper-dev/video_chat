import React from "react"

export const ChatBox = () => {
    const [msg, setMsg] = React.useState("");
    const [msgList, setMsgList] = React.useState([""]);

    React.useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if(e.key === "Enter") onSendMessage();
        })
    }, [])

    const onSendMessage = () => {
        if(!msg) return;
        let tempMsgList = msgList;
        tempMsgList.push(msg);
        setMsgList(tempMsgList);
        setMsg("");
    }


    return (
        <>
            <div id="chat.box" className="bg-gray-200 border-2 border-teal-600" style={{height: "700px", width: "500px"}}>
                {msgList.map(value => {
                    return <p>{value}</p>
                })}
            </div>
            <div id="msg.container" className="flex justify-between" >
                <input value={msg} onChange={(e) => setMsg(e.currentTarget.value)} placeholder="Write message here" className="border border-black" />
                <button onClick={onSendMessage}>Send Message</button>
            </div>
        </>
    )
}