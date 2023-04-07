import React from "react";
import WarnMsgWrapper from "./warnMsg.style";

const WarnMsg = React.forwardRef((props, ref) => {
    return <WarnMsgWrapper className={props.className} ref={ref}>{props.children}</WarnMsgWrapper>
});

export default WarnMsg;