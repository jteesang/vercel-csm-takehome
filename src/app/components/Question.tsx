import React from "react";

export interface QuestionProps {
  id: number;
  question: string;
  profile: string;
  answer: string;
}

export const Question: React.FC<{data: QuestionProps}> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <p className="p-4">
        <span className="text-lg font-bold">Question:</span><br/>{data.question}
      </p>
      
      <p className="bg-foreground text-background p-4 w-full rounded">
        <span className="text-lg font-bold">Customer Profile:</span>
        <br/>{data.profile}
      </p>
      <p className="p-4">
        <span className="text-lg font-bold">Answer: </span><br/>
        

          { data.answer.split(`\n`).map((line, index) => (
            <span key={index}>{line} <br/> </span>
          ))}

        {/* <div className="font-[family-name:var(--font-geist-sans)]">
          <ReactMarkdown>{data.answer}</ReactMarkdown>
        </div> */}
      </p>
    </div>
  )
}