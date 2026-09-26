class AppError extends Error {
    constructor(message,status) {
        super(message);
        this.status=status;
        this.operational=true;
    }
}

export default AppError;