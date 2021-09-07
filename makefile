full:
	make gen
	make cname-gen
	make commit-push
	make publish

gen:
	npm run generate

cname-gen:
	cp CNAME ./dist/CNAME

commit-push:
	git add --all  && git commit -m "Regenerated" && git push --force

publish:
	git push origin `git subtree split --prefix dist main`:gh-pages --force
