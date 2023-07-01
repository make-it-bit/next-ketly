import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export const GET = async (request) => {
  return NextResponse.json(courses);
};

export const POST = async (request) => {
  const { title, description, level, link } = await request.json();
  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
};
