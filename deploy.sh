#!/bin/sh

git switch gh-pages
git merge main --no-edit
git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git switch main
