import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function OpenAlertDialog({ isOpen, onClose, title, description }) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md  flex flex-col justify-center items-center">
      <AlertDialogCancel onClick={onClose} className="border-none text-gray-500 absolute -top-1 right-2 bg-transparent hover:bg-transparent text-md">X</AlertDialogCancel>
        <AlertDialogTitle className="text-3xl">
          {title}
        </AlertDialogTitle>
        <AlertDialogAction onClick={onClose} className="max-w-40 rounded-full">Create account</AlertDialogAction>
        <AlertDialogDescription>
          {description}
          <span className="underline font-bold">
            <a href="/login">  log in</a> 
          </span>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
