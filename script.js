document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('.link-item');

    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        link.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {

            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });

});