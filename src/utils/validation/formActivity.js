export const formActivity = (activityData) => {
    const errors = {};
    
    if (!activityData.name) {
    errors.name = 'Name is required';
    }

    if (activityData.name && activityData.name.length < 3) {
        errors.name = 'Name must be at least 3 characters long';
    }

    if (activityData.difficulty === 0){
        errors.difficulty = 'Difficulty is required'
    }

    if (activityData.difficulty && (activityData.difficulty < 1 || activityData.difficulty > 5)) {
        errors.difficulty = 'Difficulty must be between 1 and 5';
    }

    if (!activityData.duration) {
    errors.duration = 'Duration is required';
    }

    if (activityData.duration < 5) {
    errors.duration = 'Duration must be more than 5 minutes';
    }

    if (activityData.duration && activityData.duration <= 0) {
        errors.duration = 'Duration must be a positive number';
    }

    if (!activityData.season) {
    errors.season = 'Season is required';
    }

    if (activityData.season && !['summer', 'autumn', 'winter', 'spring'].includes(activityData.season.toLowerCase())) {
        errors.season = 'Invalid season';
    }

    return errors;
};
