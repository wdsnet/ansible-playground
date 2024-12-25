// Inicializando o editor com Ace
var editor = ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/yaml");

// Função para simular a execução do playbook Ansible
function simulatePlaybook() {
    var playbookContent = editor.getValue();
    var output = document.getElementById("output");

    // Simulação da execução do playbook
    if (playbookContent.includes("name: Install package")) {
        output.textContent = "Simulating playbook execution...\n";
        output.textContent += "TASK [Install package] --- SUCCESS\n";
        output.textContent += "TASK [Start service] --- SUCCESS\n";
    } else {
        output.textContent = "Simulating playbook execution...\n";
        output.textContent += "No tasks matched in playbook.\n";
    }
}

// Função para carregar exemplo 1 de playbook Ansible
function loadExample1() {
    var example1 = `
---
- hosts: all
  become: yes
  tasks:
    - name: Install package
      apt:
        name: nginx
        state: present
    - name: Start service
      service:
        name: nginx
        state: started
    `;
    editor.setValue(example1);
}

// Função para carregar exemplo 2 de playbook Ansible
function loadExample2() {
    var example2 = `
---
- hosts: all
  tasks:
    - name: Ensure apache is installed
      yum:
        name: httpd
        state: present
    - name: Start apache service
      service:
        name: httpd
        state: started
    `;
    editor.setValue(example2);
}
