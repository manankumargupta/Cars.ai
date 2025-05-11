import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import { Configuration, OpenAIApi } from 'npm:openai@4.28.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    // Initialize AI client (example using OpenAI - replace with your preferred AI service)
    const configuration = new Configuration({
      apiKey: Deno.env.get('sk-1e2bc43d0b464bcdb0d8a8050286db20'),
    });
    const ai = new OpenAIApi(configuration);

    const completion = await ai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an automotive expert AI assistant. Provide detailed, accurate information about cars, focusing on technical specifications, performance metrics, and industry knowledge.',
        },
        { role: 'user', content: message },
      ],
    });

    const response = completion.data.choices[0].message;

    return new Response(
      JSON.stringify({ response }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});