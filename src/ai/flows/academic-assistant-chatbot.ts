'use server';

/**
 * @fileOverview AI chatbot for answering subject and college-related queries.
 *
 * - academicAssistantChatbot - A function that handles the chatbot interaction.
 * - AcademicAssistantChatbotInput - The input type for the academicAssistantChatbot function.
 * - AcademicAssistantChatbotOutput - The return type for the academicAssistantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AcademicAssistantChatbotInputSchema = z.object({
  query: z.string().describe('The query from the student.'),
});
export type AcademicAssistantChatbotInput = z.infer<typeof AcademicAssistantChatbotInputSchema>;

const AcademicAssistantChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the chatbot.'),
});
export type AcademicAssistantChatbotOutput = z.infer<typeof AcademicAssistantChatbotOutputSchema>;

export async function academicAssistantChatbot(input: AcademicAssistantChatbotInput): Promise<AcademicAssistantChatbotOutput> {
  return academicAssistantChatbotFlow(input);
}

const getCollegeInfo = ai.defineTool({
  name: 'getCollegeInfo',
  description: 'Retrieves information about the college, such as departments, faculty, courses, and facilities.',
  inputSchema: z.object({
    query: z.string().describe('The specific information requested about the college.'),
  }),
  outputSchema: z.string().describe('Detailed information about the college based on the query.'),
}, async (input) => {
  // In a real application, this would fetch data from a database or external API.
  // For this example, we'll just return some hardcoded data.
  if (input.query.toLowerCase().includes('departments')) {
    return 'The college has the following departments: Computer Science, Electrical Engineering, Mechanical Engineering, and Civil Engineering.';
  } else if (input.query.toLowerCase().includes('faculty')) {
    return 'The college has a dedicated faculty with years of experience in their respective fields.';
  } else if (input.query.toLowerCase().includes('courses')) {
    return 'The college offers a wide range of courses in engineering, science, and humanities.';
  } else if (input.query.toLowerCase().includes('facilities')) {
    return 'The college has state-of-the-art facilities including a library, computer labs, and sports complex.';
  } else {
    return 'I am sorry, I do not have the information you are looking for.';
  }
});

const prompt = ai.definePrompt({
  name: 'academicAssistantChatbotPrompt',
  tools: [getCollegeInfo],
  input: {schema: AcademicAssistantChatbotInputSchema},
  output: {schema: AcademicAssistantChatbotOutputSchema},
  prompt: `You are an academic assistant chatbot for a college. Your role is to answer student questions about the college and their subjects.

You have access to the following tools:
- getCollegeInfo: Use this tool to get information about the college. Always use this tool if the question is college related.

Use the following format:

Question: the student question
Thought: what you should do to answer the question
Action: the action to take, should be getCollegeInfo if appropriate
Final Answer: the final answer to the student question

Begin!

Question: {{{query}}}
Thought: I should use the getCollegeInfo tool to answer this question.
Action: {{tool getCollegeInfo query=query}}
Final Answer:`, // The response from the getCollegeInfo tool will be inserted here
});

const academicAssistantChatbotFlow = ai.defineFlow(
  {
    name: 'academicAssistantChatbotFlow',
    inputSchema: AcademicAssistantChatbotInputSchema,
    outputSchema: AcademicAssistantChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
