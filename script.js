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

    // ─── Floating Code Symbols Background ───
    const symbols = [
        // Linguagens
        'JS', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Go',
        'Rust', 'Swift', 'Kotlin', 'Dart', 'TypeScript', 'Lua', 'R',
        'Scala', 'Perl', 'Elixir', 'Haskell',

        // Frontend
        'HTML', 'CSS', 'React', 'Vue', 'Angular', 'Svelte', 'Next.js',
        'Tailwind', 'SASS', 'Bootstrap',

        // Mobile
        'Flutter', 'React Native', 'SwiftUI', 'Jetpack',

        // Bancos de Dados
        'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase',
        'SQLite', 'Oracle', 'Cassandra', 'DynamoDB',
        

        // DevOps & Cloud
        'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Linux',
        'CI/CD', 'Terraform', 'Nginx', 'Jenkins',

        // Ferramentas
        'Git', 'npm', 'Yarn', 'Webpack', 'Figma',
        'Postman', 

        // Sintaxe & Termos
        'API', 'JSON', 'HTTP', 'REST', 'GraphQL', 'WebSocket',
        'func', 'let', 'const', 'async', 'await', 'import',
        'class', 'return', 'try/catch', 'SELECT *', 'INSERT',
        'JOIN', 'WHERE', 'CREATE TABLE', 'DROP', 'INDEX'
    ];

    const container = document.querySelector('.background-animation');
    const SYMBOL_COUNT = 40;

    function createSymbol() {
        const span = document.createElement('span');
        span.classList.add('code-symbol');
        span.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        // Randomize properties
        const duration = 12 + Math.random() * 18;   // 12s – 30s
        const delay = Math.random() * -30;           // stagger start
        const x = Math.random() * 100;               // 0% – 100% left
        const size = 0.75 + Math.random() * 1.25;    // 0.75rem – 2rem
        const sway = (Math.random() - 0.5) * 100;   // -50px to +50px (left or right)

        span.style.setProperty('--duration', `${duration}s`);
        span.style.setProperty('--delay', `${delay}s`);
        span.style.setProperty('--x', `${x}%`);
        span.style.setProperty('--size', `${size}rem`);
        span.style.setProperty('--sway', `${sway}px`);

        container.appendChild(span);
    }

    for (let i = 0; i < SYMBOL_COUNT; i++) {
        createSymbol();
    }

});