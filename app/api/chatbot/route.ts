import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = "https://rex1280.app.n8n.cloud/webhook/ff5b65c4-ece4-4282-a58d-eaf04ade66b6";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`n8n responded with status: ${response.status}`);
        }

        // Try to get the response as text first
        const text = await response.text();

        // Try to parse as JSON, otherwise return as plain text
        try {
            const data = JSON.parse(text);
            return NextResponse.json(data);
        } catch {
            // If it's not JSON, return as text in a JSON wrapper
            return NextResponse.json({ answer: text });
        }
    } catch (error) {
        console.error('Chatbot API error:', error);
        return NextResponse.json(
            { error: 'Failed to connect to chatbot service' },
            { status: 500 }
        );
    }
}
