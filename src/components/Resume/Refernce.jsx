import React from "react";



export default function Ref() {
  const resumeUrl = "/M_Dhanush_Resume (2).pdf";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-4xl shadow-xl rounded-2xl  p-6">
        <div className="flex justify-end mb-2">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl font-semibold transition-transform hover:scale-105 px-4 py-2 bg-blue-600 text-white"
            style={{ textDecoration: 'none' }}
          >
            <span style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '1.2em' }}>
              &#8681;
            </span>
            Open Resume
          </a>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center text-white font-serif">My Resume</h1>
        <div className="w-full h-[75vh] mb-4">
          <iframe
            src={resumeUrl}
            title="Resume Viewer"
            className="w-full h-full rounded-xl border shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
}