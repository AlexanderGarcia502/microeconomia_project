import { Lucide, Notification } from "@/base-components";

const SuccessNotify = ({ title = "", message = "", successNotification }) => {
  return (
    <Notification
      options={{ duration: 3000 }}
      getRef={(el) => {
        successNotification.current = el;
      }}
      className="flex"
    >
      <Lucide icon="CheckCircle" className="text-success" />
      <div className="ml-4 mr-4">
        <div className="font-medium">{title}</div>
        <div className="text-slate-500 mt-1">{message}</div>
      </div>
    </Notification>
  );
};

export default SuccessNotify;
