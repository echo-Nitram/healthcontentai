import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { specialty, question } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres un experto en ${specialty}. Responde la pregunta frecuente de manera clara, precisa y en español. La respuesta debe ser:
          
          1. Informativa pero accesible para pacientes.
          2. Mencionar cuándo consultar con un médico.
          3. No exceder 200 palabras.
          4. Incluir una nota: "IMPORTANTE: Esta información no reemplaza la consulta médica profesional."`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const answer = completion.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}