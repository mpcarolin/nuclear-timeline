export type TVisualPaneProps = {
    className?: string;
}

export const VisualPane = ({ className }: TVisualPaneProps) => {
    return (
        <div className={className}>
            <p>Main visuals will go here</p>
        </div>
    );
}

