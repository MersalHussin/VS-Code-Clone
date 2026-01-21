import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

interface IProps{
    leftPanel: ReactNode
    RightPanel: ReactNode
}



const ResizeablePanel = ( {leftPanel,RightPanel} : IProps) => {
    return (
<Group className="h-screen">
  <Panel collapsible  minSize={280} maxSize={300} className="w-30">{leftPanel}</Panel>
    <Separator />
  <Panel className="w-20">{RightPanel}</Panel>
</Group>    );
}

export default ResizeablePanel;