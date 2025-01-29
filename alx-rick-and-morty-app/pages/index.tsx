import * as Sentry from "@sentry/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

Sentry.init({
  dsn: "https://https://1c3a8b6953e1040dfe9ea315ca4791ba@o4508726794452992.ingest.us.sentry.io/4508726797008896.ingest.sentry.io/YOUR_PROJECT_ID",
  tracesSampleRate: 1.0, // Adjust sampling rate as needed
});

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;
