"use client"
import { stubbedData } from "@/app/api/data/stubbedData";
import { Question, QuestionProps } from "@/app/components/Question";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

export default function QuestionPage({ params }: { params: Promise <{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [data, setData] = useState<QuestionProps >();

  const getQuestionAndAnswerById = (id: number) => {
    return stubbedData.find(data => data.id === id);
  }


  
  useEffect(() => {
    const questionData = getQuestionAndAnswerById(Number(id));
    setData(questionData);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/"
        onClick={() => router.push('/')}
      >Home
      </a>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-center text-3xl">Question {id}</h2>
          {data && <Question data={{ question: data.question, profile: data.profile, answer: data.answer, id: data.id }} />}
        <div className="flex justify-between mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-4 pb-4">
          <button
            onClick={() => router.back()}
            className="bg-foreground hover:bg-[#383838] text-white font-bold py-2 px-4 rounded"
          >Back
          </button>
          <button
            onClick={() => parseInt(id) > 7 || parseInt(id) < 1 ? router.push('/') : router.push(`/questions/${parseInt(id) + 1}`)}
            className="bg-foreground hover:bg-[#383838] text-white font-bold py-2 px-4 rounded"
          >Next
          </button>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
          {Array.from({ length: 8 }, (_, index) => (
            <a key={index} href={`/questions/${index + 1}`} className="border border-blue bg-foreground shadow-md hover:bg-[#383838] p-2 rounded-md text-white">
              {index + 1}
            </a>
          ))}
        </div>
      </main>
    </div>

  )
}