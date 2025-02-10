import ExampleCard from "./ExampleCard";

function ExampleList() {
    const example = [
        {id: 1, title: "Example 1", details: "This is the first example" },
        {id: 2, title: "Example 2", details: "This is the second example"}
    ];
    return (
        <div>
            {example.map((example) => (
                <ExampleCard key={example.id} {...example} />
            ))}
        </div>
    );
};

export default ExampleList;