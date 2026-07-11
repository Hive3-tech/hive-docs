import type { ApiEndpoint, ApiMethod } from "./api-endpoint-types";

type WorkflowResponse = ApiEndpoint["response"];

const flow = (
  method: ApiMethod,
  path: string,
  description: string,
  response: WorkflowResponse,
  body?: string,
  query?: string,
): ApiEndpoint => ({
  method,
  path,
  scopes: [method === "GET" ? "resources:read" : "resources:write"],
  description,
  request: {
    examplePath: path.replace(/\{eventId\}/g, "evt_123")
      .replace(/\{courseId\}/g, "course_123")
      .replace(/\{questId\}/g, "quest_123")
      .replace(/\{jobId\}/g, "job_123")
      .replace(/\{enrollmentId\}/g, "enrollment_123")
      .replace(/\{personId\}/g, "person_123")
      .replace(/\{lessonId\}/g, "lesson_123")
      .replace(/\{evidenceId\}/g, "evidence_123")
      .replace(/\{applicationId\}/g, "application_123"),
    ...(body ? { body } : {}),
    ...(query ? { query } : {}),
  },
  response,
});

export const eventWorkflowEndpoints: ApiEndpoint[] = [
  flow(
    "GET",
    "/workflows/events/{eventId}/participants",
    "List participation visible to you, including manager views and your own visible participation.",
    {
      status: 200,
      body: `{
  "data": [
    {
      "email": "alex@example.com",
      "image": "https://example.com/alex.png",
      "name": "Alex Rivera",
      "personId": "person_123",
      "username": "alex",
      "accepted": true,
      "attendedAt": "2026-07-01T12:00:00.000Z",
      "enrollmentId": "enrollment_123",
      "enrolledAt": "2026-06-20T09:00:00.000Z",
      "resolvedWallet": "0x1234...abcd",
      "whitelisted": false
    }
  ]
}`,
    },
  ),
  flow(
    "POST",
    "/workflows/events/{eventId}/rsvp",
    "Create or update your RSVP or enrollment.",
    {
      status: 201,
      body: `{
  "data": {
    "accepted": true,
    "enrollmentId": "enrollment_123",
    "eventId": "evt_123",
    "isRSVPd": true
  }
}`,
    },
    `{
  "enroll": true
}`,
  ),
  flow(
    "PATCH",
    "/workflows/events/{eventId}/participants/{enrollmentId}",
    "Approve or deny a participant, or update attendance, when you manage the event.",
    {
      status: 200,
      body: `{
  "data": {
    "enrollmentId": "enrollment_123",
    "updated": true
  }
}`,
    },
    `{
  "accepted": true
}`,
  ),
  flow(
    "POST",
    "/workflows/events/{eventId}/attendance",
    "Record attendance for a participant you manage.",
    {
      status: 200,
      body: `{
  "data": {
    "enrollmentId": "enrollment_123",
    "updated": true
  }
}`,
    },
    `{
  "enrollmentId": "enrollment_123",
  "attended": true
}`,
  ),
];

export const courseWorkflowEndpoints: ApiEndpoint[] = [
  flow(
    "GET",
    "/workflows/courses/{courseId}/enrollments",
    "List course enrollments when you manage the course.",
    {
      status: 200,
      body: `{
  "data": [
    {
      "email": "alex@example.com",
      "image": "https://example.com/alex.png",
      "name": "Alex Rivera",
      "personId": "person_123",
      "username": "alex",
      "accepted": true,
      "enrollmentId": "enrollment_123",
      "enrolledAt": "2026-06-20T09:00:00.000Z",
      "completed": false,
      "completedAt": null,
      "completedLessonIds": [
        "lesson_123"
      ],
      "completedLessons": 1,
      "progressPercent": 50,
      "totalLessons": 2
    }
  ]
}`,
    },
  ),
  flow(
    "POST",
    "/workflows/courses/{courseId}/enrollment",
    "Enroll or unenroll yourself.",
    {
      status: 201,
      body: `{
  "data": {
    "courseId": "course_123",
    "enrollmentId": "enrollment_123",
    "enrolled": true
  }
}`,
    },
    `{
  "enroll": true
}`,
  ),
  flow(
    "PATCH",
    "/workflows/courses/{courseId}/enrollments/{personId}",
    "Approve or deny a course enrollment.",
    {
      status: 200,
      body: `{
  "data": {
    "accepted": true,
    "enrollmentId": "enrollment_123"
  }
}`,
    },
    `{
  "accepted": true
}`,
  ),
  flow(
    "POST",
    "/workflows/courses/{courseId}/lessons/{lessonId}/complete",
    "Mark one lesson complete for yourself.",
    {
      status: 200,
      body: `{
  "data": {
    "courseId": "course_123",
    "lessonId": "lesson_123",
    "completed": false,
    "completedAt": null,
    "completedLessonIds": [
      "lesson_123"
    ],
    "completedLessons": 1,
    "progressPercent": 50,
    "totalLessons": 2
  }
}`,
    },
  ),
];

export const questWorkflowEndpoints: ApiEndpoint[] = [
  flow(
    "GET",
    "/workflows/quests/{questId}/enrollments",
    "List quest enrollments when you manage the quest.",
    {
      status: 200,
      body: `{
  "data": [
    {
      "email": "alex@example.com",
      "image": "https://example.com/alex.png",
      "name": "Alex Rivera",
      "personId": "person_123",
      "username": "alex",
      "accepted": true,
      "enrollmentId": "enrollment_123",
      "enrolledAt": "2026-06-20T09:00:00.000Z",
      "questId": "quest_123",
      "participantId": "person_123",
      "progressPercent": 50,
      "isComplete": false,
      "startedAt": "2026-06-20T09:00:00.000Z",
      "completedAt": null,
      "objectives": [
        {
          "objectiveId": "objective_123",
          "type": "custom",
          "scope": "quest",
          "targetCount": 1,
          "currentCount": 0,
          "progressPercent": 0,
          "isComplete": false,
          "customDescription": "Submit evidence"
        }
      ],
      "whitelistedCredentials": 0,
      "defaultWalletRequired": false
    }
  ]
}`,
    },
  ),
  flow(
    "POST",
    "/workflows/quests/{questId}/enrollment",
    "Enroll or unenroll yourself.",
    {
      status: 201,
      body: `{
  "data": {
    "id": "enrollment_123",
    "questId": "quest_123",
    "personId": "person_123",
    "isEnrolled": true,
    "isActive": true,
    "accepted": true,
    "enrolledAt": "2026-07-01T12:00:00.000Z",
    "acceptedAt": "2026-07-01T12:00:00.000Z",
    "startedAt": "2026-07-01T12:00:00.000Z",
    "completedAt": null,
    "progressPercent": 0
  }
}`,
    },
    `{
  "enroll": true
}`,
  ),
  flow(
    "PATCH",
    "/workflows/quests/{questId}/enrollments/{enrollmentId}",
    "Approve or deny a quest enrollment.",
    {
      status: 200,
      body: `{
  "data": {
    "id": "enrollment_123",
    "questId": "quest_123",
    "personId": "person_123",
    "isEnrolled": true,
    "isActive": true,
    "accepted": true,
    "enrolledAt": "2026-07-01T12:00:00.000Z",
    "acceptedAt": "2026-07-01T12:00:00.000Z",
    "startedAt": "2026-07-01T12:00:00.000Z",
    "completedAt": null,
    "progressPercent": 0
  }
}`,
    },
    `{
  "accepted": true
}`,
  ),
  {
    ...flow(
      "GET",
      "/workflows/quests/{questId}/evidence",
      "List quest evidence, optionally filtered by status.",
      {
        status: 200,
        body: `{
  "data": [
    {
      "email": "alex@example.com",
      "image": "https://example.com/alex.png",
      "name": "Alex Rivera",
      "personId": "person_123",
      "username": "alex",
      "attachments": [],
      "content": "Evidence link",
      "evidenceId": "evidence_123",
      "objectiveId": "objective_123",
      "status": "pending",
      "submittedAt": "2026-07-01T12:00:00.000Z"
    }
  ]
}`,
      },
      undefined,
      "status=pending",
    ),
    params: [{ name: "status", type: "string", description: "Optional evidence-status filter." }],
  },
  flow(
    "POST",
    "/workflows/quests/{questId}/evidence",
    "Submit evidence for a quest objective.",
    {
      status: 201,
      body: `{
  "data": {
    "evidenceId": "evidence_123",
    "objectiveId": "objective_123",
    "status": "pending"
  }
}`,
    },
    `{
  "objectiveId": "objective_123",
  "content": "Evidence link"
}`,
  ),
  flow(
    "PATCH",
    "/workflows/quests/{questId}/evidence/{evidenceId}",
    "Approve or deny submitted evidence.",
    {
      status: 200,
      body: `{
  "data": {
    "evidenceId": "evidence_123",
    "status": "approved"
  }
}`,
    },
    `{
  "status": "approved"
}`,
  ),
];

export const jobWorkflowEndpoints: ApiEndpoint[] = [
  flow(
    "GET",
    "/workflows/jobs/{jobId}/applications",
    "List applications when you manage the job.",
    {
      status: 200,
      body: `{
  "data": [
    {
      "email": "alex@example.com",
      "image": "https://example.com/alex.png",
      "name": "Alex Rivera",
      "personId": "person_123",
      "username": "alex",
      "applicationId": "application_123",
      "appliedAt": "2026-07-01T12:00:00.000Z",
      "coverLetterStorageId": "storage_cover_123",
      "jobId": "job_123",
      "resumeStorageId": "storage_resume_123",
      "status": "pending"
    }
  ]
}`,
    },
  ),
  flow(
    "GET",
    "/workflows/jobs/applications",
    "List your own job applications.",
    {
      status: 200,
      body: `{
  "data": [
    {
      "applicationId": "application_123",
      "jobId": "job_123",
      "status": "pending"
    }
  ]
}`,
    },
  ),
  flow(
    "POST",
    "/workflows/jobs/{jobId}/applications",
    "Apply with resume metadata and optional cover-letter metadata.",
    {
      status: 201,
      body: `{
  "data": {
    "applicationId": "application_123",
    "status": "pending"
  }
}`,
    },
    `{
  "resume": {
    "url": "https://example.com/resume.pdf"
  }
}`,
  ),
  flow(
    "PATCH",
    "/workflows/job-applications/{applicationId}",
    "Update an application status when you manage the job.",
    {
      status: 200,
      body: `{
  "data": {
    "applicationId": "application_123",
    "status": "reviewed"
  }
}`,
    },
    `{
  "status": "reviewed"
}`,
  ),
];
