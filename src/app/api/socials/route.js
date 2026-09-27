import { NextResponse } from "next/server";

export async function GET() {
  try {
    const githubRes = await fetch(`https://api.github.com/users/Pavan8421`, {
      next: { revalidate: 3600 },
    }).then((res) => res.json());

    const githubData = githubRes || {};

    return NextResponse.json({
      github: {
        name: githubData.name || githubData.login || "Pavan Kumar Varanasi",
        username: githubData.login || "Pavan8421",
        avatar: githubData.avatar_url || "https://github.com/Pavan8421.png",
        bio:
          githubData.bio ||
          "AI Engineer building AI agents, voice AI systems, and LLM-powered products",
        location: githubData.location || "Visakhapatnam, India",
        stats: [
          { label: "Repositories", value: githubData.public_repos || 0 },
          { label: "Followers", value: githubData.followers || 0 },
        ],
      },
      linkedin: {
        name: "Pavan Kumar Varanasi",
        username: "AI Engineer @ Uprise Labs Private Limited",
        avatar: "https://github.com/Pavan8421.png",
        bio: "",
        location: "Visakhapatnam, India",
        stats: [],
      },
      email: {
        name: "Drop an Email",
        username: "pavankumarvaranasi2004@gmail.com",
        avatar: "https://github.com/Pavan8421.png",
        bio: "Whether you have a question, a project idea, or just want to say hi, feel free to reach out!",
        location: "Inbox",
        stats: [],
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
