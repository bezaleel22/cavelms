-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_graphql";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN', 'SUPER_ADMIN', 'SUPPORT', 'ALUMNI', 'PARTNER', 'GUEST');

-- CreateEnum
CREATE TYPE "AllowedModel" AS ENUM ('COURSE', 'ACTIVITY', 'COURSE_CONTENT', 'FILE', 'FORUM', 'FORUM_POST', 'FORUM_COMMENT', 'GRADE', 'QUIZ', 'QUESTION', 'SUBMISSION', 'ANSWER_CHOICE', 'MATCHING_PAIR', 'NOTIFICATION', 'TARGET', 'USER');

-- CreateEnum
CREATE TYPE "AllowedPermission" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE', 'UPDATE_PERMISSIONS', 'GRANT_PERMISSIONS', 'REVOKE_PERMISSIONS');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'PDF', 'WORD_DOC', 'TEXT', 'PPT', 'SPREADSHEET', 'ARCHIVE', 'OTHERS');

-- CreateEnum
CREATE TYPE "SettingType" AS ENUM ('BOOLEAN', 'STRING', 'NUMBER', 'DATE', 'TIME');

-- CreateEnum
CREATE TYPE "UserSettingKeys" AS ENUM ('EMAIL_NOTIFICATIONS_ENABLED', 'DEFAULT_TIMEZONE', 'DEFAULT_LANGUAGE', 'DARK_MODE_ENABLED', 'SHOW_UNFINISHED_COURSES', 'SHOW_COMPLETED_COURSES', 'AUTO_ENROLLMENT_ENABLED', 'SHOW_COURSE_PROGRESS', 'DEFAULT_FONT_SIZE', 'ENABLE_TTS', 'SHOW_ENROLLED_COURSES_COUNT', 'SHOW_INSTRUCTOR_AVAILABILITY', 'SHOW_RELATED_COURSES', 'SHOW_COURSE_RATINGS', 'SHOW_COURSE_REVIEWS', 'ALLOW_PUSH_NOTIFICATIONS', 'ENABLE_OFFLINE_MODE', 'SHOW_COURSE_ACTIVITY_FEED');

-- CreateEnum
CREATE TYPE "GlobalSettingKeys" AS ENUM ('ENROLLMENT_OPEN', 'MAX_ENROLLMENT', 'DEFAULT_TIMEZONE', 'DEFAULT_LANGUAGE', 'SHOW_INSTRUCTOR_INFO', 'ALLOW_STUDENT_MESSAGES', 'COURSE_PASSING_GRADE', 'SHOW_POPULAR_COURSES', 'SHOW_RECOMMENDED_COURSES', 'DEFAULT_COURSE_TEMPLATE', 'SHOW_ALL_COURSES', 'ALLOW_COURSE_DISCOVERY', 'ENABLE_BADGES', 'SHOW_COURSE_TAGS', 'ALLOW_COURSE_COMMENTS', 'ENABLE_SSO_LOGIN', 'SHOW_ANNOUNCEMENTS', 'SHOW_COURSE_SCHEDULE');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('COURSE_VIEW', 'COURSE_ENROLLED', 'COURSE_COMPLETED', 'COURSE_PROGRESS', 'FORUM_POST_CREATED', 'FORUM_POST_UPDATED', 'FORUM_COMMENT_CREATED', 'FORUM_COMMENT_UPDATED', 'GRADE_RECEIVED', 'QUIZ_TAKEN', 'QUIZ_GRADE_RECEIVED', 'ASSIGNMENT_SUBMITTED', 'ASSIGNMENT_GRADE_RECEIVED', 'RESOURCE_ACCESSED', 'MEDIA_INTERACTION', 'PAGE_VIEW');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLE_CHOICE', 'TRUE_FALSE', 'SHORT_ANSWER', 'ESSAY', 'MATCHING', 'NUMERIC');

-- CreateEnum
CREATE TYPE "QuizType" AS ENUM ('EXAM', 'ASSIGNMENT');

-- CreateEnum
CREATE TYPE "ProctoringMethod" AS ENUM ('NONE', 'MANUAL', 'AUTOMATED');

-- CreateEnum
CREATE TYPE "TargetType" AS ENUM ('TARGET', 'MINIMUM', 'MAXIMUM');

-- CreateEnum
CREATE TYPE "RepeatInterval" AS ENUM ('DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('CREATED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('SYSTEM', 'USER_GENERATED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('CREATED', 'PENDING', 'COMPLETED', 'CANCELLED', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'OTHER');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('CREATED', 'ISSUED', 'PAID', 'OVERDUE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('CREATED', 'PENDING', 'COMPLETED', 'CANCELLED', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('COURSE_ENROLLMENT', 'COURSE_FEE', 'MEMBERSHIP_FEE', 'SUBSCRIPTION_FEE', 'REGISTRATION_FEE', 'SERVICE_FEE', 'DONATION', 'OTHER');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'SGD', 'AED', 'BRL', 'ZAR', 'MXN', 'SEK', 'NOK', 'DKK', 'PHP', 'HKD', 'NZD', 'THB', 'MYR', 'KRW', 'IDR', 'SAR', 'RUB', 'NGN', 'EGP', 'ZMW', 'KES', 'GHS', 'DZD', 'MAD', 'XOF', 'XAF', 'ETB', 'TZS', 'UGX', 'MZN', 'KWD', 'TND');

-- CreateTable
CREATE TABLE "BaseModel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "BaseModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "permissionIds" TEXT[],
    "phone" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "permissions" TEXT[],
    "username" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "about" TEXT NOT NULL,
    "wallet" DOUBLE PRECISION NOT NULL,
    "timeZone" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "isAuthenticated" BOOLEAN NOT NULL,
    "status" "RegistrationStatus" NOT NULL DEFAULT 'CREATED',
    "matricNumber" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "regNumber" TEXT NOT NULL,
    "files" TEXT[],
    "courses" TEXT[],
    "salvationBrief" TEXT NOT NULL,
    "godsWorkings" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "churchName" TEXT NOT NULL,
    "churchAddress" TEXT NOT NULL,
    "pastorName" TEXT NOT NULL,
    "pastorEmail" TEXT NOT NULL,
    "pastorPhone" TEXT NOT NULL,
    "churchInvolved" TEXT NOT NULL,
    "healthConditions" TEXT NOT NULL,
    "healthIssueDescription" TEXT NOT NULL,
    "scholarship" BOOLEAN NOT NULL,
    "scholarshipReason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "confirmedAt" TIMESTAMP(3),
    "confirmationMailSentAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "graduationYear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referee" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "Referee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claims" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Claims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL,
    "text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "courseID" TEXT NOT NULL,
    "courseContentID" TEXT,
    "activityType" "ActivityType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT,
    "semester" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "matriculationEndDate" TIMESTAMP(3),
    "enrollmentEndDate" TIMESTAMP(3),
    "maxStudents" INTEGER,
    "language" TEXT,
    "thumbnailUrl" TEXT,
    "coverUrl" TEXT,
    "categories" TEXT[],
    "tags" TEXT[],
    "instructors" TEXT[],
    "assistants" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "enrollmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlobalSetting" (
    "id" TEXT NOT NULL,
    "type" "SettingType" NOT NULL,
    "key" "GlobalSettingKeys" NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "GlobalSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSetting" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "SettingType" NOT NULL,
    "key" "UserSettingKeys" NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaFile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "encoding" TEXT,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "MediaFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "mediaType" "MediaType" NOT NULL,
    "tags" TEXT[],
    "videoPlayerId" TEXT NOT NULL,
    "mediaFileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerInfo" (
    "id" TEXT NOT NULL,
    "currentTime" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "posterUrl" TEXT,

    CONSTRAINT "PlayerInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Forum" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "courseId" TEXT NOT NULL,
    "postIds" TEXT[],
    "tagIds" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Forum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "courseID" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "commentIds" TEXT[],
    "fileIds" TEXT[],
    "forumId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tags" TEXT[],
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ForumPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumComment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "fileIds" TEXT[],
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ForumComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "postIds" TEXT[],
    "courseIds" TEXT[],

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "criteria" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseProgress" (
    "id" TEXT NOT NULL,
    "lecturesCompleted" INTEGER NOT NULL,
    "assignmentsCompleted" INTEGER NOT NULL,
    "quizzesCompleted" INTEGER NOT NULL,
    "overallProgress" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "CourseProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quizType" "QuizType" NOT NULL,
    "duration" INTEGER NOT NULL,
    "passingScore" INTEGER NOT NULL,
    "proctoringMethod" "ProctoringMethod" NOT NULL,
    "resultsReleaseDate" TIMESTAMP(3),
    "certificate" BOOLEAN NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TEXT NOT NULL,
    "timeLimit" INTEGER NOT NULL,
    "shuffleQuestions" BOOLEAN NOT NULL,
    "randomizeQuestions" BOOLEAN,
    "randomizeAnswers" BOOLEAN NOT NULL,
    "categories" TEXT[],
    "courseId" TEXT NOT NULL,
    "questionIds" TEXT[],
    "gradeIds" TEXT[],
    "submissionIds" TEXT[],
    "isLocked" BOOLEAN NOT NULL,
    "waitTime" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "text" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "hints" TEXT[],
    "randomize" BOOLEAN NOT NULL,
    "pointValue" INTEGER NOT NULL,
    "categories" TEXT[],
    "quizId" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerChoice" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "feedback" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "questionId" TEXT,
    "answerId" TEXT,

    CONSTRAINT "AnswerChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "quizID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "points" INTEGER NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "weight" INTEGER NOT NULL,
    "feedback" TEXT[],
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "weight" INTEGER NOT NULL,
    "pointsAwarded" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "submissionId" TEXT,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchingPair" (
    "id" TEXT NOT NULL,
    "left" TEXT NOT NULL,
    "right" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "MatchingPair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3),
    "startDate" TIMESTAMP(3),
    "courseId" TEXT NOT NULL,
    "completionDate" TIMESTAMP(3),
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "targetType" "TargetType" NOT NULL,
    "targetValue" INTEGER,
    "currentValue" INTEGER,
    "targetMetric" TEXT NOT NULL,
    "units" TEXT,
    "repeatInterval" "RepeatInterval",
    "repeatEndDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sendTime" TIMESTAMP(3) NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "method" "PaymentMethod" NOT NULL,
    "type" "PaymentType" NOT NULL,
    "transactionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "courseId" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "invoiceId" TEXT,
    "status" "TransactionStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referee" ADD CONSTRAINT "Referee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_videoPlayerId_fkey" FOREIGN KEY ("videoPlayerId") REFERENCES "PlayerInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_mediaFileId_fkey" FOREIGN KEY ("mediaFileId") REFERENCES "MediaFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Forum" ADD CONSTRAINT "Forum_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumPost" ADD CONSTRAINT "ForumPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumComment" ADD CONSTRAINT "ForumComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerChoice" ADD CONSTRAINT "AnswerChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerChoice" ADD CONSTRAINT "AnswerChoice_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchingPair" ADD CONSTRAINT "MatchingPair_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Target"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
