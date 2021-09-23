#
# When everything is pushed and ready to be deployed,
# Just run "make"i command on the main branch. It will:
#
# - Regen the project to have a fresh dist folder
# - Copy the CNAME file in dist/, mandatory for the domain name
# - Recommit everything
# - Force push the content of dist/ to 'gh-pages' branch
# - The website is based on 'gh-pages' and will be live in a couple of minutes
#



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
	git add --all  && git commit -m "Published website" && git push --force

publish:
	git push origin `git subtree split --prefix dist main`:gh-pages --force
