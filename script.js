//script for repo website

        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            const buttons = document.querySelectorAll('.nav-btn');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            event.target.classList.add('active');
        }

        function searchMonsters() {
            const input = document.getElementById('monsterSearch').value.toLowerCase();
            const cards = document.querySelectorAll('.monster-card');
            let visibleCount = 0;
            
            cards.forEach(card => {
                const name = card.getAttribute('data-name');
                const type = card.getAttribute('data-type');
                const text = card.textContent.toLowerCase();
                
                if (name.includes(input) || type.includes(input) || text.includes(input)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            const noResults = document.getElementById('noMonstersFound');
            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }