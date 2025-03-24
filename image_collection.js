let currentIndex = 0;


// Array to store image information
const imageCollection = [
    {
        filename: 'artwork/chicken_logo.png',
		alt: 'KIP logo',
        title: 'Logo',
        description: '',
        isVisible: false
    },
    {
        filename: 'artwork/majestic_rooster_with_vibrant_plumage_on_black_background_dramatic_lighting.png',
		alt: 'Majestic Rooster',
        title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
    {
        filename: 'artwork/elegant_hen_with_beautiful_feather_detail_on_black_background_professional_photography.png',
        alt: 'Elegant Hen',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/beautiful_detailed_realistic_chicken_with_colorful_feathers_on_black_background_studio_lighting.png',
        alt: 'Beautiful Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/elegant_hen_with_chicks_on_black_background_studio_lighting.png',
        alt: 'Elegant Hen with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/black_chicken_with_black background_studio_lighting.png',
        alt: 'Elegant Hen with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/brown_chicken_with_black_background_studio_lighting.png',
        alt: 'Elegant Hen with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/white_chicken_with_black_background_studio_lighting.png',
        alt: 'Elegant Hen with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/kipios_futuristica.png',
        alt: 'Elegant Hen with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/chicken_with_chicks_on_black_background_studio_lighting_1.png',
        alt: 'Chicken with Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/black_chicken_with_black_background_dramatic_lighting.png',
        alt: 'Black Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/two_black_chicken_with_black_background_studio_lighting.png',
        alt: 'Two Black Chickens',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/black_chicken_with_black_background_studio_lighting_1.png',
        alt: 'Black Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/brown_chicken_with_black_background_dramatic_lighting.png',
        alt: 'Brown Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/brown_chicken_with_black_background_studio_lighting_1.png',
        alt: 'Brown Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/another_chicken.png',
        alt: 'Another Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
	    {
        filename: 'artwork/black_rooster_on black_background_studio_lighting.png',
        alt: 'Black Rooster',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/rooster_on_black_background_studio_lighting.png',
        alt: 'Rooster',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/black_rooster_on_black_background_dramatic_lighting.png',
        alt: 'Black Rooster',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/majestic_rooster_with_vibrant_plumage_on_black_background_dramatic_lighting_1.png',
        alt: 'Majestic Rooster',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/elegant_hen_with_beautiful_feather_detail_on_black_background_professional_photography_1.png',
        alt: 'Elegant Hen',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/3_white_chickens_with_black_background_studio_lighting.png',
        alt: 'Three White Chickens',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/white_chicken_with_black_background_studio_lighting_1.png',
        alt: 'White Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/chicken_chicks_on_black_background_studio_lighting.png',
        alt: 'Chicken Chicks',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/metalic_looking_robotics_chicken_black_background_studio_lighting_1.png',
        alt: 'Robotic Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/metalic_looking_robotics_chicken_black_background_studio_lighting.png',
        alt: 'Robotic Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/metalic_looking_boston_robotics_chicken_black_background_studio_lighting.png',
        alt: 'Robotic Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/robotic_chicken_on_black_background_studio_lighting.png',
        alt: 'Robotic Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/another_chicken_1.png',
        alt: 'Chicken',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/rooster_neon_light_with_black_background_studio_lighting.png',
        alt: 'Rooster Neon',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    },
		{
        filename: 'artwork/chicken_neon_light_with_black_background_dramatic_lighting.png',
        alt: 'Chicken Neon',
		title: 'Majestic Chickens',
        description: 'Admire the beauty and elegance of these magnificent birds.',
        isVisible: true
    }
	
	
	
	
	
];


function getWeightedRandomIndex() {
            // Counter to track number of images shown
            if (!window.imageCounter) {
                window.imageCounter = 0;
            }
            
            window.imageCounter++;
            
            // Every 4th image should be image 0
            if (window.imageCounter % 4 === 0) {
                return 0;
            }
            
            // For other positions, get random index excluding 0
            const availableIndices = [];
            for (let i = 1; i < imageCollection.length; i++) {
                if (i !== currentIndex) { // Avoid showing same image twice
                    availableIndices.push(i);
                }
            }
            
            return availableIndices[Math.floor(Math.random() * availableIndices.length)];
        }
		

// Function to get random image (excluding current one)
function getRandomImage() {
    if (imageCollection.length <= 1) return currentIndex;
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * imageCollection.length);
    } while (newIndex === currentIndex);
    
    return newIndex;
}




