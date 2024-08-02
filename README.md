# Application d'Analyse de Fichiers

Cette application React propose trois outils d'analyse de fichiers : un analyseur de PCAP, un outil FTF (File Type Forensics), et un analyseur de protocoles PCAP.

## Fonctionnalités

1. Analyseur PCAP
   - Extraction de fichiers à partir de PCAP
   - Analyse VirusTotal des fichiers extraits

2. Outil FTF (File Type Forensics)
   - Analyse de malware et forensique
   - Opérations diverses : extraction de chaînes, calcul d'entropie, énumération des en-têtes, etc.

3. Analyseur de Protocoles PCAP
   - Analyse détaillée des protocoles dans un fichier PCAP
   - Statistiques sur les paquets et le transfert de données

## Installation

1. Clonez ce dépôt
2. Installez les dépendances :
npm install
3. Lancez l'application :
npm run dev

## Utilisation

### Analyseur PCAP

1. Accédez à la page de l'analyseur PCAP
2. Uploadez un fichier PCAP
3. Cliquez sur "Analyze"
4. Visualisez les résultats de l'extraction de fichiers et de l'analyse VirusTotal

### Outil FTF

1. Accédez à la page de l'outil FTF
2. Uploadez un fichier
3. Sélectionnez le type d'analyse (malware ou forensique)
4. Choisissez une opération spécifique
5. Cliquez sur "Analyze"
6. Visualisez les résultats de l'analyse

### Analyseur de Protocoles PCAP

1. Accédez à la page de l'analyseur de protocoles
2. Uploadez un fichier PCAP
3. Cliquez sur "Analyze"
4. Visualisez les statistiques détaillées des protocoles

## Structure du Projet

- `Analysispcap.tsx` : Composant pour l'analyseur PCAP
- `Ftf.tsx` : Composant pour l'outil FTF
- `Protocols.tsx` : Composant pour l'analyseur de protocoles PCAP

## Dépendances Principales

- React
- Axios pour les requêtes HTTP
- Tailwind CSS pour le styling

## API Backends

L'application utilise trois API backends distinctes :

1. Analyseur PCAP : `https://pcapanalyserbackend.onrender.com/analyze`
2. Outil FTF : `https://ftf-tool-latest.onrender.com/analyze`
3. Analyseur de Protocoles : `https://protocol-backend-2962.onrender.com/analyze`

## Sécurité

Assurez-vous de gérer correctement les fichiers potentiellement malveillants et de ne pas exposer d'informations sensibles.

## Contribution

Les contributions sont les bienvenues. Veuillez ouvrir une issue ou soumettre une pull request pour toute amélioration.

## Licence

Ce projet est sous licence MIT.
