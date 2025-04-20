import { openai } from "../../config/ai";

const createMCQ = async () => {
  const completion = await openai.chat.completions.create({
    model: "openai/o4-mini-high",
    messages: [
      {
        role: "system",
        content:
          "You are an expert MCQ generator for Bangladeshi admission tests. Respond only in Bengali. Format your questions exactly as instructed.",
      },
      {
        role: "user",
        content: `পদার্থবিজ্ঞানের ৫টি এমসিকিউ তৈরি করো। প্রতিটি প্রশ্নটি নিচের ফরম্যাটে দাও:

        1. প্রশ্ন  
        (a) অপশন ১  
        (b) অপশন ২  
        (c) অপশন ৩  
        (d) অপশন ৪  
        **Answer:** (c)
        
        2. প্রশ্ন  
        (a) অপশন ১  
        (b) অপশন ২  
        (c) অপশন ৩  
        (d) অপশন ৪  
        **Answer:** (b)
        
        3. প্রশ্ন  
        (a) অপশন ১  
        (b) অপশন ২  
        (c) অপশন ৩  
        (d) অপশন ৪  
        **Answer:** (d)
        
        4. প্রশ্ন  
        (a) অপশন ১  
        (b) অপশন ২  
        (c) অপশন ৩  
        (d) অপশন ৪  
        **Answer:** (a)
        
        5. প্রশ্ন  
        (a) অপশন ১  
        (b) অপশন ২  
        (c) অপশন ৩  
        (d) অপশন ৪  
        **Answer:** (d)
        
        শুধু এই ফরম্যাট অনুসরণ করো। ব্যাখ্যা, অতিরিক্ত লেখা বা ভিন্ন ফরম্যাট দিও না।`,
      },
    ],
    temperature: 0.7,
    max_tokens: 7000,
    stream: false,
  });
  console.log(completion);
  return completion?.choices?.[0]?.message;
};

export const QAServices = {
  createMCQ,
};
